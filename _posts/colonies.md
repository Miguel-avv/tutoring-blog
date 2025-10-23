---
title: "Kinase"
excerpt: "Tokyo"
coverImage: "/assets/images/Screenshot 2025-06-14 at 2.12.47 PM.jpg"
date: "2025-05-06T05:35:07.322Z"
author:
  name: Manga world
  picture: "/assets/images/Screenshot 2025-06-14 at 2.27.06 PM.jpg"
ogImage:
  url: "/assets/blog/preview/cover.jpg"
---

In addition to the mutations listed above, it is also possible that there are silent mutations in
your mutant sequence (mutations that do not change the amino acid sequence). Even though silent 
mutations do not change the amino acid sequence, can they affect the protein in any way (structure,
function, or expression level)? Justify your answer.

Yes. Silent mutations can still influence protein expression and folding even though the amino acid 
sequence is unchanged. They can alter codon usage, affecting how quickly the ribosome translates the mRNA, 
or change the mRNA’s secondary structure, which can impact its stability or translation efficiency. 
For example, using a rare codon can slow translation, leading to improper folding or lower amounts of functional protein.

Eli


12.In general, what is a conservative mutation? Give an example.


A conservative mutation replaces an amino acid with another of similar chemical properties (charge, polarity, size), usually preserving protein function.
Example: Aspartic acid (D) → Glutamic acid (E) (both negatively charged).

13.Are your mutations conservative or non-conservative?


M1 (H229I): Conservative – both isoleucine and methionine are non-polar aliphatic residues.

M2 (T98M): Non-conservative – threonine is polar uncharged; methionine is non-polar.

M2 (H97Q): Non-conservative – histidine is positively charged; glutamine is polar uncharged.

6: Measure the fluorescence intensity of each sample (Negative H, Positive C, M1, M2) and normalize to the positive control.
Ans:Use the formula:

where:

X = mutant sample mean intensity

H = negative control (His)

C = positive control


Neg control= 0
Positive control=1 


7. What are the GMQE and QMEANDisCo values? What is the sequence identity?
GMQE: ~0.89

QMEANDisCo: ~0.06

Sequence identity: ~98–99%

Would you consider this an accurate model?
These values indicate a high-quality model that closely matches the WT protein structure.
Yes, it would be considered an accurate and reliable model.

8. Are any of your mutations located in badly modelled regions?

No, all mutations are located in well-modelled regions of the protein, meaning the
structural predictions for these sites are reliable.

9. If a mutation is located in a badly modelled region, how would that influence your interpretation of its effect on the protein?

If the mutation is in a badly modelled region, the model’s accuracy there is low, so
the predicted structural effects are uncertain.
Any conclusions about its impact on folding or function should be treated with caution.



10. What is the reason why some regions can be badly modelled?

Badly modelled regions usually correspond to intrinsically disordered or flexible regions of the protein that are not well defined in the template structure.
These parts often lack resolved coordinates in the PDB file, making accurate modelling impossible


14. Explain how the mutations found in your two mNeonGreen sequences could affect the structure or interactions of mNeonGreen.


The mutations can influence the overall folding,
stability, and fluorescence of mNeonGreen by changing 
the local chemical environment of the protein, particularly 
near the chromophore or within secondary structure elements.

H97Q (Histidine → Glutamine):
Histidine is a positively charged residue that can participate
in hydrogen bonding and acid–base interactions within the protein 
core. Replacing it with glutamine, which is polar but uncharged, 
removes the imidazole side chain that can stabilize nearby residues 
through electrostatic interactions. This change could disrupt local 
hydrogen-bond networks or slightly alter the orientation of 
residues surrounding the chromophore, potentially decreasing fluorescence intensity or altering the protein’s pH sensitivity.

T98M (Threonine → Methionine):
Threonine is a small polar residue that often participates in
hydrogen bonds, while methionine is larger and hydrophobic. 
Substituting threonine with methionine can reduce polarity in 
that region, affecting interactions with nearby water molecules
and residues that stabilize the β-barrel structure of mNeonGreen.
The added bulk of methionine may also introduce steric strain or 
modify packing around the chromophore, possibly leading to lower 
folding efficiency or fluorescence quantum yield.

H229I (Histidine → Isoleucine):
This substitution replaces a polar residue with a hydrophobic one.
If this histidine originally contributed to surface charge balance 
or participated in hydrogen bonds, its replacement by isoleucine 
\could destabilize surface interactions or alter solvent accessibility.
Conversely, if buried, the more hydrophobic isoleucine may stabilize
the core but change local dynamics, influencing maturation kinetics of the fluorophore.


ELI:
M3 – S142G

Change: Serine (polar, –OH) → Glycine (non-polar, no side chain).

Effect: Loss of the serine –OH removes potential H-bonds and increases 
local backbone flexibility (glycine is helix/turn-promoting). 
This can loosen packing in the β-barrel and subtly perturb the chromophore environment, 
potentially decreasing folding efficiency and brightness.

M3 – K213E

Change: Lysine (positive) → Glutamate (negative).

Effect: Charge inversion can break/form salt bridges and 
flip local electrostatics on the surface. That can alter 
protein–solvent or protein–protein interactions, and may 
shift pH sensitivity or stability; brightness could drop if
surface rearrangements transmit strain to the barrel.

M4 – W14C

Change: Tryptophan (large, aromatic, strongly hydrophobic) → Cysteine (small, polarizable, –SH).

Effect: Big loss of hydrophobic bulk and π-stacking capacity. 
At the N-terminal region of the barrel, this can destabilize 
local packing and slightly increase solvent access; the cysteine 
could also form unintended disulfide under oxidizing conditions. 
(Note: it is not right next to the GYG chromophore, per the model, 
but it can still affect folding/stability indirectly.)

M4 – I16V
Change: Isoleucine → Valine (both non-polar, aliphatic).
Effect: Conservative size/shape reduction; usually minimal structural impact.
Likely little to no effect on fluorescence unless it sits at a tight packing hotspot.

Overall, these mutations modify the electrostatic landscape and packing
density around key structural motifs. Such alterations can affect how efficiently 
the protein folds, how stable it is under physiological conditions, and how 
effectively the chromophore forms and emits fluorescence.


Are your mutations located in conserved or non-conserved
regions of mNeonGreen? Refer to Appendix 6.1 for information
about the conserved regions of mNeonGreen. Is a mutation in a conserved 
region likely to be more or less impactful? Briefly justify your answer.

The mutations in M3 and M4 are located in non-conserved regions of mNeonGreen.
Mutations in conserved regions are usually more impactful because those amino 
acids are maintained through evolution to preserve key structural or functional 
features—such as the stability of the β-barrel and the formation of the chromophore.
Changes in non-conserved regions are less likely to disrupt folding or fluorescence, 
since these areas tolerate variation without major effects on the protein’s stability or activity.