---
title: "Lab1"
excerpt: "The country of the flying fish"
coverImage: "/assets/images/Screenshot 2025-06-14 at 2.35.05 PM.jpg"
date: "2020-03-16T05:35:07.322Z"
author:
  name: Water
  picture: "/assets/images/Screenshot 2025-06-14 at 2.39.39 PM.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---
## Research

1-What are the functions of the MgCi2 and of the primers ?

MgCl₂: Cofactor for Taq polymerase, required for nucleotide incorporation. 
At high concentrations, it reduces fidelity and promotes misincorporation.

Primers: Short single-stranded oligonucleotides complementary to the target ends. 
They define the start and end points of amplification and determine which DNA is amplified.

![alt text](/assets/images/barbaods/bellairs/IMG_4560.JPG)

### 2-Revisiting what you have found regar....

Size of mneongreen is 730 bp hence we expect to see a band in our gel electrophoresis at ~750 bp

The negative control should not show nay bands


### 3- Consider theat after running your pcr product on a gel, you do not see any bands for your EP PCR sampple

    1: annealing temp: if temp is too high-> primer is ubable to bind to template 
    2: number of cycles of concentration is low, insuficient amplification product
    3: Primer []:
        Case 1: primer [] too high: primers might bind at undesirables sites
                -> means amplification of wrong sequence.
        Case 2: primer [] too low -> when annealing not enough DNA would be amplified
    4: Elongation time:if elongation time is too short ...not enough time for complete replication of the target

### 4-What is the Dpnl recognizes on the DNA...
Recognition site: DpnI recognizes the sequence GATC when it is methylated (common in plasmid DNA prepared from
E. coli).

Cutting site: DpnI cleaves the methylated GATC sites in the parental plasmid DNA.

Importance for cloning: PCR products generated in vitro are not methylated, so they are resistant 
to DpnI digestion. This allows selective removal of the parental plasmid template after EP-PCR, ensuring 
that only the newly mutated PCR-amplified DNA is carried forward into cloning. This prevents recovery of wild-type 
clones instead of the desired mutant library


![alt text](/assets/images/barbaods/bellairs/IMG_3446.JPG) 

### 5 :What is a reason for purifying the DNA from your PCR reaction, and why is it important?

To remove reaction mixture components from the PCR product so that they do not interfere with other 
DNA manipulations such as enzyme digestion or cloning process.

### 6: What can you conclude about your EP-PCR results if there is no band observed in the “no template” lane of your gel?...
No band in no-template lane: The negative control worked, meaning there was no contamination; 
PCR results are valid.

Band in no-template lane: Indicates contamination or nonspecific amplification; 
PCR results cannot be trusted.

### 7: Consider that you followed a protocol similar to the one....
How to check: Always run a DNA ladder and a positive control 
sample alongside your PCR.

If PCR failed:
Ladder is visible.
Positive control is visible.

The sample lane shows no band which means that the PCR did not amplify DNA.

If electrophoresis/staining failed:

-Ladder and positive control are also missing.
-No bands appear anywhere meaning issues with the gel, buffer, or dye.


### 8 Troubleshooting PCRs , Idially a pcr results in a single product that appears as a strong band when...

(i) Annealing temp too low: Primers may bind nonspecifically → multiple bands or smeared DNA.

(ii) Annealing temp too high: Primers may not bind efficiently → weak or no PCR product.

(iii) Extension time too short (½ needed): DNA polymerase doesn’t fully synthesize the target → truncated/incomplete products, weak bands.

(iv) Extension time too long (2× needed): Unnecessary elongation → nonspecific products, extra bands, or background amplification.


### 9: How would you chooose which enzymes to use in restriction enzymes, 
Compatibility of restriction sites: Choose enzymes that cut at sites flanking the insert and in the vector without cutting inside the gene of interest.

Sticky ends vs blunt ends: Prefer enzymes that generate compatible sticky ends (easier ligation, higher efficiency).

Other considerations (optional):

Ensure recognition sites are unique in the vector and insert.

Pick enzymes that function in the same buffer for efficient double digestion.