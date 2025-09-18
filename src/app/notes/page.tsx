"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Note = {
    id: string;
    title: string;
    content: string;
    updatedAt: number; // epoch ms
};

const STORAGE_KEY = "notes:v1";

function loadNotes(): Note[] {
    if (typeof window === "undefined") return [];
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw) as Note[];
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

function saveNotes(notes: Note[]) {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

function newNote(): Note {
    const id = crypto.randomUUID();
    return {
        id,
        title: "Untitled note",
        content: "",
        updatedAt: Date.now(),
    };
}

export default function NotesPage() {
    const [notes, setNotes] = useState<Note[]>([]);
    const [activeId, setActiveId] = useState<string | null>(null);
    const [query, setQuery] = useState("");

    // Load once
    useEffect(() => {
        const initial = loadNotes();
        setNotes(initial);
        setActiveId(initial[0]?.id ?? null);
    }, []);

    // Persist on change
    useEffect(() => {
        saveNotes(notes);
    }, [notes]);

    const activeNote = useMemo(
        () => notes.find((n) => n.id === activeId) ?? null,
        [notes, activeId]
    );

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return notes.slice().sort((a, b) => b.updatedAt - a.updatedAt);
        return notes
            .filter(
                (n) =>
                    n.title.toLowerCase().includes(q) ||
                    n.content.toLowerCase().includes(q)
            )
            .sort((a, b) => b.updatedAt - a.updatedAt);
    }, [notes, query]);

    function createNote() {
        const n = newNote();
        setNotes((prev) => [n, ...prev]);
        setActiveId(n.id);
    }

    function deleteNote(id: string) {
        setNotes((prev) => prev.filter((n) => n.id !== id));
        if (activeId === id) {
            const next = notes.find((n) => n.id !== id)?.id ?? null;
            setActiveId(next);
        }
    }

    function updateNote(patch: Partial<Note>) {
        if (!activeNote) return;
        setNotes((prev) =>
            prev.map((n) =>
                n.id === activeNote.id
                    ? { ...n, ...patch, updatedAt: Date.now() }
                    : n
            )
        );
    }

    function exportNotes() {
        const blob = new Blob([JSON.stringify(notes, null, 2)], {
            type: "application/json",
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "notes.json";
        a.click();
        URL.revokeObjectURL(url);
    }

    function onImportFile(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
            try {
                const imported = JSON.parse(String(reader.result)) as Note[];
                if (!Array.isArray(imported)) throw new Error("Invalid format");
                const cleaned = imported
                    .filter((n) => n && n.id && typeof n.title === "string")
                    .map((n) => ({
                        id: String(n.id),
                        title: n.title || "Untitled note",
                        content: String(n.content ?? ""),
                        updatedAt: Number(n.updatedAt ?? Date.now()),
                    }));
                setNotes(cleaned);
                setActiveId(cleaned[0]?.id ?? null);
            } catch {
                alert("Failed to import notes. Make sure the file is a JSON export.");
            } finally {
                e.target.value = "";
            }
        };
        reader.readAsText(file);
    }

    return (
        <div className="flex h-[calc(100vh-2rem)] gap-4 p-4">
            {/* Sidebar */}
            <aside className="w-80 shrink-0 border rounded-lg p-3 flex flex-col gap-3">
                <div className="flex gap-2">
                    <button
                        className="px-3 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                        onClick={createNote}
                    >
                        New note
                    </button>
                    <button
                        className="px-3 py-2 rounded border"
                        onClick={exportNotes}
                        title="Export notes to JSON"
                    >
                        Export
                    </button>
                    <label className="px-3 py-2 rounded border cursor-pointer">
                        Import
                        <input
                            type="file"
                            accept="application/json"
                            className="hidden"
                            onChange={onImportFile}
                        />
                    </label>
                </div>
                <input
                    className="w-full border rounded px-2 py-1"
                    placeholder="Search notes..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <ul className="flex-1 overflow-auto divide-y">
                    {filtered.map((n) => (
                        <li
                            key={n.id}
                            className={`p-2 cursor-pointer ${
                                n.id === activeId ? "bg-blue-50" : ""
                            }`}
                            onClick={() => setActiveId(n.id)}
                        >
                            <div className="flex justify-between items-center">
                                <div className="font-medium truncate">
                                    {n.title || "Untitled"}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Link
                                        href={`/notes/${n.id}`}
                                        className="text-blue-600 hover:underline"
                                        onClick={(e: React.MouseEvent) => e.stopPropagation()}
                                        title="Open note page"
                                    >
                                        Open
                                    </Link>
                                    <button
                                        className="text-red-600 hover:underline ml-1"
                                        onClick={(e: React.MouseEvent) => {
                                            e.stopPropagation();
                                            if (confirm("Delete this note?")) deleteNote(n.id);
                                        }}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                            <div className="text-xs text-gray-500">
                                {new Date(n.updatedAt).toLocaleString()}
                            </div>
                        </li>
                    ))}
                    {filtered.length === 0 && (
                        <li className="p-2 text-sm text-gray-500">No notes found</li>
                    )}
                </ul>
            </aside>

            {/* Editor */}
            <main className="flex-1 border rounded-lg p-3 flex flex-col">
                {!activeNote ? (
                    <div className="m-auto text-gray-500">Create or select a note</div>
                ) : (
                    <>
                        <div className="flex items-center justify-between gap-2 mb-2">
                            <input
                                className="text-2xl font-semibold border-b outline-none p-1 flex-1"
                                value={activeNote.title}
                                onChange={(e) => updateNote({ title: e.target.value })}
                                placeholder="Note title"
                            />
                            <Link
                                href={`/notes/${activeNote.id}`}
                                className="px-3 py-2 rounded border text-blue-700 hover:bg-blue-50"
                                title="Open public note view"
                            >
                                Open note
                            </Link>
                        </div>
                        <textarea
                            className="flex-1 w-full border rounded p-2 font-mono"
                            value={activeNote.content}
                            onChange={(e) => updateNote({ content: e.target.value })}
                            placeholder="Write your notes here..."
                        />
                        <div className="text-xs text-gray-500 mt-2">
                            Autosaved: {new Date(activeNote.updatedAt).toLocaleTimeString()}
                        </div>
                    </>
                )}
            </main>
        </div>
    );
}