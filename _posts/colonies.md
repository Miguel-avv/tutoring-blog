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

| **TOTAL protein samples** | **Concentration (µg/µl)** from Lab 7 | **Volume of protein sample for 20 µg** (µl) | **Volume of protein sample (9 µl total)** (µl) | **Volume of ddH₂O (µl)** | **Volume of buffer (µl)** |
| :-----------------------: | :----------------------------------: | :-----------------------------------------: | :--------------------------------------------: | :----------------------: | :-----------------------: |
|       **TOTAL-His**       |                 2.14                 |                     9.34                    |                      2.16                      |           6.84           |             3             |
|        **TOTAL-A**        |                 2.40                 |                     8.33                    |                      2.24                      |           6.76           |             3             |
|        **TOTAL-M3**       |                 3.20                 |                     6.25                    |                      2.72                      |           6.28           |             3             |
|        **TOTAL-M4**       |                 3.55                 |                     5.63                    |                      2.03                      |           6.97           |             3             |



The role of SDS

Explain what would happen if you forget to add SDS to your samples before 
loading them onto the polyacrylamide gel? Also, provide two reasons for why 
SDS is added to protein samples to be resolved by SDS-PAGE.

SDS (sodium dodecyl sulfate) is a detergent that denatures proteins, unfolding
them into linear chains, and coats them with a uniform negative charge proportional
to their length. Without SDS, proteins would retain their native charge and shape,
so they would migrate based on charge and shape instead of size, preventing accurate
molecular-weight separation .


5. Transfer using a Semi-Dry apparatus
Why does the PVDF membrane need to be bathed in methanol prior to use?

   PVDF membranes are hydrophobic. Briefly soaking in 100% methanol activates them by
making the surface hydrophilic, allowing buffer and proteins to wet and bind properly.
Without this activation, proteins would not transfer efficiently .




8. In the purified His-only sample, there is no prominent/dominant band at the position where there 
 are prominent/dominant bands in the C and M mNeonGreen samples. Briefly explain why.

The His-only sample does not contain the mNeonGreen gene, so no His-tagged protein was produced or purified.
As a result, no band appears at the ~27 kDa position where mNeonGreen is present in the C and M samples.


Question:
9.Do you think these prominent/dominant bands in the purified samples of wild type (C) and mutated versions
of mNeonGreen are indeed mNeonGreen? Briefly justify your answer.

Yes. The prominent bands around ~27 kDa correspond to the expected molecular weight of His-tagged mNeonGreen. 
The absence of this band in the His-only control confirms that the band represents mNeonGreen specifically,
not a contaminant protein .



10.: There are many protein bands in the TOTAL extracts. It is therefore difficult to identify which of the bands are mNeonGreen.
Briefly explain why there are many bands in the TOTAL extract lanes.


Total extracts contain all cellular proteins from the E. coli lysate, not just mNeonGreen. Because the sample is unpurified,
it includes thousands of bacterial proteins of different sizes, resulting in multiple bands across the gel .





Atherosclerotic lesions, or plaques, in arteries, form preferentially in locations of 
the vasculature where the blood flow is not laminar, or undisturbed, but where it is disturbed, 
or turbulent, such as near branch points or tight curves. It is generally thought that endothelial cells —
the cells lining the surface of blood vessels — can sense whether flow is undisturbed or disturbed, 
and that the resulting mechanosensitive changes in gene expression cause atherosclerotic lesions.

Your friend from a neighboring lab developed an in vitro system allowing her
to expose cultured monolayers of endothelial cells to either undisturbed or disturbed 
flow, and then identify molecular differences between these samples.

RNAseq analysis revealed that cells exposed to disturbed flow express 
significantly higher levels of CLDN10 (claudin-10), a cell–cell adhesion receptor.

Excited about this result, she approaches you to help validate whether CLDN10 
is involved in endothelial mechanosensing. You are aware that RNAseq quantifies mRNA,
not protein, and that mRNA and protein levels do not necessarily correlate.

To further pursue this research and validate the RNAseq result, you must:
(a) formulate a hypothesis (1 sentence)
(b) develop an experimental strategy (1–2 sentences)
(c) specify the main experimental steps
(d) list necessary controls (specify what they are)
(e) describe potential outcomes.


Hypothesis: 

We hypothesize that endothelial cells exposed to disturbed flow express higher levels 
of claudin-10 protein than cells exposed to undisturbed flow.

Experimental Strategy

The previous RNAseq results only showed mRNA levels for CLDN10.
To confirm that this corresponds to protein expression, 
we will perform a Western blot to compare claudin-10 protein levels in 
endothelial cells exposed to disturbed versus undisturbed flow. 
A stronger band in disturbed cells would confirm that CLDN10 protein expression increases under disturbed flow.

(c)Experimental Design Steps

i. Cell lysis
Lyse both disturbed and undisturbed endothelial cells using a lysis buffer
to break membranes and release proteins.

ii. Centrifugation
Centrifuge lysates to remove cell debris and collect the protein-rich supernatant.


iii. SDS-PAGE (gel electrophoresis)
Perform SDS-PAGE to separate proteins by size. SDS detergent denatures
proteins and gives them uniform negative charge, allowing separation by molecular weight.
→ (Your note “perform SDS page, try to make it clear you are running gel” was right.)

iv. Membrane transfer (Western blot transfer)
Transfer proteins from the gel onto a PVDF membrane soaked in methanol, using transfer buffer and an electric current.
 “assemble transfer sandwich”

v. Blocking
Incubate the membrane with a blocking solution (e.g., 5% milk in TBST) to prevent nonspecific antibody binding.


vi. Primary antibody incubation
Incubate the blocked membrane with a primary antibody specific for claudin-10 to detect the protein of interest.


vii. Secondary antibody incubation
Wash the membrane and incubate with a secondary antibody conjugated to an enzyme (e.g., HRP) that recognizes the primary antibody.
 You wrote “fluorophore-linked,

viii. Detection and analysis
Use a chemiluminescent or fluorescent substrate to visualize the bands.
The band for disturbed cells should have higher intensity than the one for undisturbed cells if the hypothesis is correct.


(d) Necessary Controls

Positive control
A sample known to express claudin-10 to confirm that the antibody works properly.

Negative control
A sample known not to express claudin-10 to ensure the antibody is not binding nonspecifically.

Loading control
An antibody against a housekeeping protein such as β-actin or GAPDH to normalize protein loading across lanes.


Potential Outcomes

High expression under disturbed flow
If disturbed cells show a stronger band for claudin-10, this indicates higher protein levels, confirming the hypothesis that disturbed flow upregulates claudin-10.

High expression under undisturbed flow
If undisturbed cells show a stronger claudin-10 band, it suggests the opposite — disturbed flow may downregulate claudin-10.

No detectable difference
If both samples show similar band intensities, claudin-10 expression may not be flow-dependent, meaning the RNAseq increase in mRNA does not translate to protein level.