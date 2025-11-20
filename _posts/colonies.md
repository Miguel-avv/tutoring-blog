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

Q1:Describe how the photobleaching curves for the five cells are different. 
Explain any differences in the shape or amplitude of the curves.

Student answer: “the more negative (bigger magnitude) the slope, 
the faster the protein is loosing fluorescence after being excited. All the curves look quite similar. 
The similarity in the wild type (control) cells exhibiting stable and reproducible photophysical behavior.
This provides a solid control for M3 & M4 to be compared to.”)

(TA comment: “plots should follow the same shape because the bleaching curve should look somewhat similar.
if one goes up more fluorescence means inconsistency in cell imaging (excitation?)”)

Q2:3. Bleaching kinetics – plots for mutant versions of mNeonGreen.
As in (1), generate scatter plots for five cells of M3 and M4 (each mutant separately). Upload your plot to Teams (Class Materials/Lab Results – Upload/Your day/Lab 11). This is the plot from step 4 of Part 4 of the manual.
(TA comment: “Need one plot per mutant = 5 cells per mutant to show consistency or the overall trends.”)

4. Bleaching kinetics – bleaching half-time.
Photobleaching is a process during which individual molecules in a population are turned off stochastically. Each one of the bleaching curves that you generated describes this for thousands of molecules, resulting in an exponential decay, where the slope represents the bleaching rate. Using the steps described in the lab manual (Part 1–4), estimate the half-life in seconds (bleaching time) for five cells expressing wildtype and five cells expressing mutant mNeonGreen. Determine the average of the five cells for each variant.

Table:
t₁/₂ in seconds	C	M3	M4
Cell 1	55.52	73.739	45.904
Cell 2	53.116	63.316	49.355
Cell 3	57.213	81.207	44.799
Cell 4	53.893	79.126	45.010
Cell 5	54.220	63.316	46.210
Mean	54.7382	67.2808	46.1150

Full-marks answer:

The wildtype (C) has a mean bleaching half-time of ~54.7 s.
M3 shows a much longer half-time (~67.3 s), meaning it bleaches more slowly.
M4 shows a shorter half-time (~46.1 s), meaning it bleaches more quickly.

Thus, relative to WT:

M3 is more photostable (longer t₁/₂ → slower bleaching)
M4 is less photostable (shorter t₁/₂ → faster bleaching)
These trends were consistent across the five cells for each variant.

Question 5 – Comparison between variants (model answer)
Full-marks answer:

M3 has a longer bleaching half-time than WT, meaning its photobleaching rate is slower. 
This indicates that the M3 mutation increases the photostability of mNeonGreen.
In contrast, M4 has a shorter bleaching half-time than WT, meaning its photobleaching rate is faster. This indicates that the M4 mutation decreases photostability.
Overall, the two mutations have opposite effects:
M3 stabilizes the chromophore, making it bleach more slowly
M4 destabilizes the chromophore, making it bleach more quickly
This suggests that the amino-acid changes in M3 strengthen the local environment of the fluorophore, whereas the mutations in M4 weaken it.


Question6->on exel

7. Maturation kinetics – maturation half-time.

Following the instructions in Part 5 of the manual, calculate the mean maturation half times for wildtype (C)
and mutant (Mut) mNeonGreen. Enter your results into the table below.
(Table from your photo:)

t₁/₂ (minutes)	C	Mut
Cell 1	18.818	12.99
Cell 2	26.965	19.109
Cell 3	6.52	15.516
Cell 4	15.567	17.817
Cell 5	5.276	13.867
Mean	12.076	14.262

TA comment: “longer ½ life = slower maturation rate”
Score: 3.5 / 5 pts

Question 7 — Maturation half-time interpretation
Full-marks answer:
The wildtype mNeonGreen shows a mean maturation half-time of ~12.1 minutes,
while the mutant has a longer half-time of ~14.3 minutes. Because maturation half-time 
is inversely related to maturation rate, this indicates that the mutant mNeonGreen matures
more slowly than the wildtype version.

Question 8 — Comparison between WT and mutant
Full-marks answer (strong, concise, TA-ready):
The mutant mNeonGreen has a longer maturation half-time than the wildtype, 
indicating that its maturation rate is slower. This means the mutant protein
takes more time to fold and form a functional fluorescent chromophore. As a result,
the mutation decreases the speed at which newly synthesized protein becomes fluorescent.
Functionally, this mutation would be less suitable for live-cell imaging, where fast maturation
is important for accurately tracking newly expressed proteins.

Experimental design module
(You are allowed to work with your classmates when they are allowed to say when discussing this question.
You may also work on this question with other students, but make sure to answer in your own words.)

(a) First, you have to choose the most suitable fluorescent protein (FP) to be used as a tag for your actin binding protein (ABP).
Sequence homology analysis suggests that the actin-binding domain is located near the C-terminus of the protein and your TA has
told you everything is fine except that it is expressed at low levels in cells, so you would need a bright tag. You want to
visualize its localization in live mammalian cells using confocal microscopy, and you want to fuse the ABP with a fluorescent protein. You have the tools ready to amplify the C-terminus in PCR cloning, and you are confident that you will be able to do the cloning with your technical skills. In the end, you will introduce the resulting plasmid into mammalian cells for imaging. You expect that both actin-mNeonGreen and the new actin-ABP fusion should be in the same cell at the same time. Before you start, you have to make two important decisions:

Choose the most suitable fluorescent protein. 
Your plasmid kit has cDNAs for mVenus, mScarlet-3, mChartreuse, and mKelly2. To help you decide between them, 
navigate to FPbase.org and compare their fluorescence properties that are most relevant for imaging live mammalian cells.
Also check their excitation/emission spectra in the spectral viewer. Make sure your choice of FP is sufficiently spectrally
separated from mNeonGreen, so that both actin-mNeonGreen and your new FP-ABP fusion can be imaged in the same cell.

Which of the four, mVenus, mScarlet-3, mChartreuse, and mKelly2 would you choose? Explain why you choose that one and
not the others.

Full-marks answer:

I would choose mScarlet-3 as the fluorescent protein tag.
Among the four options, mScarlet-3 has minimal spectral overlap with mNeonGreen,
meaning its excitation and emission spectra are well separated. This allows reliable 
two-color imaging of actin-mNeonGreen and the ABP-mScarlet-3 fusion in the same cell without bleed-through between channels.

mVenus and mChartreuse have excitation/emission spectra that fall too close to mNeonGreen, 
producing significant spectral overlap and making it difficult to distinguish the two signals in live cells.
mKelly2 is also not ideal because it is relatively dim and has poorer maturation properties, making visualization 
of a low-expression ABP more challenging.

In contrast, mScarlet-3 is very bright, matures rapidly, and produces a strong fluorescent signal 
even when the ABP is expressed at low levels. Its high photostability is advantageous for live-cell
confocal imaging. Therefore, mScarlet-3 is the best choice for producing a clearly separable, bright
red channel while imaging actin-mNeonGreen simultaneously.

(b) Second, you have to decide whether to add your choice of FP to the N- or C-terminus of ABP. In any protein,
what is important to consider when deciding where to add a FP tag? Based on your last answer, would you place
your choice of FP to ABP’s N- or C-terminus? Justify your answer.

Your handwritten draft says:
“To ensure we don't interfere with the function of the actin binding protein,
we need to add the FP to the terminus which will not disrupt the binding to actin. 
Since the ABP of interest has an actin binding domain near the terminus we would add
the FP to the N-terminus to ensure no interference between the actin binding domain & actin.


correct answer:
When choosing where to place a fluorescent protein tag, 
it is important to avoid disrupting any critical functional
domains of the protein—especially binding domains, catalytic sites, or
regions required for correct folding. In this ABP, sequence analysis 
indicates that the actin-binding domain is located near the C-terminus. 
Therefore, adding a bulky FP tag at the C-terminus could interfere with actin binding.

To preserve the normal function of the ABP, the FP should be fused to the
N-terminus, which is distant from the actin-binding domain. Placing the tag
at the N-terminus minimizes steric interference and allows the ABP to interact 
n with actin normally while still enabling fluorescent visualization.