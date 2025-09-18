"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

type Note = {
    id: string;
    title: string;
    content: string;
    updatedAt: number;
};

const STORAGE_KEY = "notes:v1";

// Minimal Markdown-to-HTML: images, links, headings, code, bold/italic, paragraphs
function mdToHtml(md: string): string {
    let html = md.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    // Images: ![alt](src)
    html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img alt="$1" src="$2" />');
    // Links: [text](href)
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    // Inline code: `code`
    html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
    // Bold/Italic
    html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");
    // Headings
    html = html.replace(/^###### (.*)$/gm, "<h6>$1</h6>");
    html = html.replace(/^##### (.*)$/gm, "<h5>$1</h5>");
    html = html.replace(/^#### (.*)$/gm, "<h4>$1</h4>");
    html = html.replace(/^### (.*)$/gm, "<h3>$1</h3>");
    html = html.replace(/^## (.*)$/gm, "<h2>$1</h2>");
    html = html.replace(/^# (.*)$/gm, "<h1>$1</h1>");
    // Paragraphs (split by blank lines)
    html = html
        .split(/\n{2,}/)
        .map((block) => {
            if (/^\s*<h\d|^\s*<img|^\s*<ul|^\s*<ol|^\s*<pre|^\s*<blockquote/.test(block)) {
                return block;
            }
            return `<p>${block.replace(/\n/g, "<br/>")}</p>`;
        })
        .join("\n");

    return html;
}

export default function NoteViewPage() {
    const params = useParams<{ id: string }>();
    const id = params?.id;
    const [notes, setNotes] = useState<Note[] | null>(null);

    useEffect(() => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            const parsed = raw ? (JSON.parse(raw) as Note[]) : [];
            setNotes(parsed);
        } catch {
            setNotes([]);
        }
    }, []);

    const note = useMemo(() => notes?.find((n) => n.id === id) ?? null, [notes, id]);

    if (notes === null) return null; // waiting for client load

    if (!note) {
        return (
            <div className="max-w-3xl mx-auto p-6">
                <div className="mb-4">
                    <Link href="/notes" className="text-blue-600 hover:underline">
                        ← Back to Notes
                    </Link>
                </div>
                <h1 className="text-2xl font-semibold mb-2">Note not found</h1>
                <p className="text-gray-600">The note you’re looking for doesn’t exist on this device.</p>
            </div>
        );
    }

    return (
        <article className="prose dark:prose-invert max-w-3xl mx-auto p-6">
            <div className="mb-4">
                <Link href="/notes" className="text-blue-600 hover:underline">
                    ← Back to Notes
                </Link>
            </div>
            <h1>{note.title || "Untitled note"}</h1>
            <div className="text-sm text-gray-500 mb-6">
                Updated {new Date(note.updatedAt).toLocaleString()}
            </div>
            <div
                className="prose-img:rounded prose-img:border"
                dangerouslySetInnerHTML={{ __html: mdToHtml(note.content || "") }}
            />
        </article>
    );
}