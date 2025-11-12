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

Western detection:
  1-  Provide two reasons for why the primary antibody is not typically labelled directly with HRP or a fluorescent tag.

        1.Using a secondary antibody amplifies the signal — 
        several secondary antibodies can bind to one primary antibody, producing stronger detection.

        2.It is more cost-effective and flexible, since a single 
        labeled secondary antibody can be used to detect multiple different primary antibodies from the same species.

2-Why is it important to wash the membrane after the incubation with the primary antibody (Steps 11–14)? What might happen
if you skipped this step and how would it affect visualization of the protein bands on the membrane?

Washing removes unbound or nonspecifically bound primary antibodies that remain on the membrane after incubation.
If this step were skipped, residual antibodies could bind nonspecifically during secondary antibody incubation, causing high background and false positive signals on the blot.
Proper washing ensures specific, clear bands corresponding only to the target protein.

3- Explain the role of the horseradish peroxidase (HRP) in today’s chemiluminescent detection system for visualizing protein bands.

HRP (horseradish peroxidase) is an enzyme conjugated to the secondary antibody. It catalyzes the oxidation of luminol in the presence of hydrogen peroxide, producing chemiluminescent light.
This emitted light marks the location of the target protein on the membrane and is captured by the ChemiDoc imaging system.

or HRP, attached to the secondary antibody, catalyzes a chemiluminescent reaction that emits light when it oxidizes luminol. This light reveals the position of the target protein on the blot.

6- Once you have completed the Western blot detection, download the image of your chemiluminescent blot from Image Lab.
Open the image in Fiji, invert it, flip it as necessary, and compare the image of your chemiluminescent blot with the Stain-free blot.
There should now be specific bands in the TOTAL extracts of the wild type (C) and the mutated versions (M1, M2) of mNeonGreen.

Yes. The prominent bands appearing around 27 kDa in the TOTAL extracts of the wild type (C) and mutated (M1, M2) samples correspond to His-tagged mNeonGreen, which has a theoretical molecular weight of approximately 27 kDa.
The absence of a band at that position in the His-only control confirms that these bands are specific to mNeonGreen expression.

Sample	Mean Intensity (Raw)	Area	Mean Intensity (Background)	Signal Density	Interpretation
TOTAL-His	2321.60	0.020	630.74	13.6	No mNeonGreen expressed (negative control)
TOTAL-C	2600.04	0.020	977.36	25.5	Wild-type mNeonGreen expression
TOTAL-M1	4004.73	0.020	2107.36	28.0	Slightly higher expression
TOTAL-M2	4379.73	0.020	2107.36	28.0	Highest expression among samples


8.Looking at your own results, do you find that there are any big differences between the expression of wild type and mutated versions of mNeonGreen?
If no, explain in short what it means. If yes, explain in short what it means.

The mutated versions (M3 and M4) show slightly higher signal intensity compared to the wild type (C), suggesting that the mutations may affect the stability or folding of the mNeonGreen protein, leading to small differences in expression or detection.
However, because Western blot measures protein quantity (not fluorescence), we can only conclude that the mutants may be more stable or more efficiently expressed, not that they fluoresce more strongly.

9.Consider that after detecting the presence of mNeonGreen in your sample by Western Blot, you would also like to confirm the presence of another protein in your sample.
Do you think that you could use the same membrane for this?
Explain your reasoning based on the interactions of proteins and antibodies with the membrane.
Your handwritten answer (transcribed):

Yes, the same membrane can be reused to detect another protein after the first detection.
Following the initial mNeonGreen detection, the bound antibodies (both primary and secondary) can be removed by treating the membrane with a stripping buffer.
The membrane can then be reblocked and incubated with a new set of antibodies specific to the second protein.
This works because the proteins transferred to the membrane remain bound, while only the antibodies are stripped away.

10. Your measurements are based on analyzing the images of your chemiluminescent Western blot.
    How confident are you in the accuracy of your results?
    What were possible sources of error?
    Write down two possible sources, not including major experimental mistakes.
    I am fairly confident in the accuracy of the results; the observed band patterns and intensities were consistent with expectations for mNeonGreen expression.

Two possible sources of error:

1-Incomplete protein transfer from the gel to the membrane — this could lead to weaker or missing bands.

2-Quantification error in ImageJ analysis — the rectangular 
selection tool may include background regions outside the band, affecting the calculated mean intensity.


Experitment 11:
Your project as a new recruit in the lab is to study the displacement and subsequent reassembly of nucleosomes during DNA replication in budding yeast. Earlier studies in the lab suggest a link with the histone chaperone FACT. This made you think that FACT might be interacting with one of the subunits of the hetero-hexameric MCM2-7 replicative helicase.

Sequence analysis furthermore indicates that FACT might interact with the N-terminal domain of MCM2, which comprises the first 150 amino acids of the full-length MCM2 protein. Therefore, you want to test this possible interaction. Which method would you choose to test this hypothesis?
Fortunately, your lab also has an anti-FACT antibody that works well in Western blot (lot of course, your lab also has antibodies that reliably recognize affinity tags). However, you are unable to obtain an anti-MCM2 antibody before the deadline of the project.

State a hypothesis.
Then, the methods to test for protein–protein interaction, which should include the use of Western blot. List the experimental steps that you would take. Discuss possible outcomes with respect to your hypothesis. Clearly separate the subsections in your answer.

Hypothesis

FACT directly interacts with the N-terminal domain of MCM2 during nucleosome reassembly in budding yeast.

Experimental Method

We will use Co-immunoprecipitation (Co-IP) to test the protein–protein interaction between FACT and MCM2, followed by Western blot detection.

Procedure
1. Sample Preparation

Tag MCM2 with an affinity tag (e.g., His or FLAG) at its N-terminus.

Lyse yeast cells expressing both MCM2 and FACT to release proteins.

2. Immunoprecipitation (Co-IP)

Add an anti-FACT antibody to the lysate to capture FACT and any proteins bound to it.

Add Protein A/G beads to pull down the antibody–protein complex.

Wash beads thoroughly to remove non-specific proteins.

Elute the bound proteins (FACT + potential interactors).

3. Western Blot Analysis

Separate eluted proteins on an SDS-PAGE gel.

Transfer proteins to a PVDF membrane.

Block membrane to prevent non-specific antibody binding.

Incubate with an antibody that recognizes the MCM2 affinity tag, since no direct anti-MCM2 antibody is available.

Incubate with a secondary HRP-conjugated antibody and detect via chemiluminescence.

Controls

Positive control:
Pull-down of FACT using anti-FACT antibody from cells expressing both FACT and MCM2 (to confirm the Co-IP setup works).

Negative controls:

Co-IP using lysate lacking FACT → ensures signal depends on FACT.

Co-IP using MCM2 lacking the N-terminal domain → tests if interaction depends on this region.

Expected Outcomes
Observation	Interpretation
Band detected for MCM2 with N-terminal domain	FACT interacts with MCM2’s N-terminal domain.
No band detected for MCM2 with N-terminal domain	FACT does not interact with MCM2.
Band appears only for full-length MCM2 but not truncated MCM2	Interaction depends on N-terminal domain.
Bands appear for both full-length and truncated MCM2	FACT binds a different region of MCM2.
Conclusion

If the Western blot shows that MCM2 co-precipitates with FACT only when the N-terminal domain is present, this supports the hypothesis that FACT directly binds the N-terminal region of MCM2 during nucleosome reassembly.