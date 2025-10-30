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

part 2a) h 650 c 650
        M3 700 M4 650

Analysis
:
| Sample Name | Measured mean fluorescence intensity (a.u.) | Adjusted mean fluorescence intensity (a.u.) |
| ----------- | ------------------------------------------- | ------------------------------------------- |
| H           | 181.762                                     | 0                                           |
| C           | 7936.525                                    | 7754.76                                     |
| M3          | 8633.200                                    | 8471.48                                     |
| M4          | 11068.897                                   | 10887.1                                     |


Total extracts:
| **Sample Name** | **OD₅₉₅** |
| --------------- | --------- |
| H               | 0.240     |
| C               | 0.212     |
| M3              | 0.280     |
| M4              | 0.240     |


b) TOTAL extracts – protein concentrations...
| **Total Protein Sample** | **Protein concentration obtained using the equation (µg/mL)** | **Dilution factor** | **Protein concentration (µg/mL)** |
| ------------------------ | ------------------------------------------------------------- | ------------------- | --------------------------------- |
| H                        | 4.4675                                                        | 200                 | 9343.0                          |
| C                        | 4.1405                                                        | 200                 | 9281.0                             |
| M3                       | 4.3835                                                        | 200                 | 9276.3                             |
| M4                       | 4.9230                                                        | 200                 | 9846.15                            |


893.5 ug/ml x 0.001L x 1300 uL = 12146.94 ug


Purified :
| **Sample Name** | **OD₅₉₅** |
| --------------- | --------- |
| H               | 0.612     |
| C               | 0.587     |
| M3              | 0.262     |
| M4              | 0.348     |


e) | **Purified Sample** | **Protein concentration using the equation obtained (µg/mL)** | **Dilution factor** | **Protein concentration (µg/mL)** |
| ------------------- | ------------------------------------------------------------- | ------------------- | --------------------------------- |
| H                   | 1.1063                                                        | 100                 | 110.63                            |
| C                   | 7.9056                                                        | 100                 | 790.56                            |
| M3                  | 3.8556                                                        | 100                 | 385.56                            |
| M4                  | 4.8309                                                        | 100                 | 483.09                            |


b) Why is this normalization step necessary? Provide one possible explanation for why the
protein concentrations in the purified samples could be different.

Normalization ensures that fluorescence measurements are independent of the total 
protein concentration in each sample.
By dividing the fluorescence intensity by the protein concentration (µg protein), 
we compare intrinsic brightness per unit protein rather than total yield.

Protein concentrations can differ between purified samples due to variations in 
expression efficiency, purification recovery, or losses during washing/elution.

///
The normalization step corrects for differences in total protein concentration so
fluorescence reflects intrinsic brightness per µg of protein. Concentrations can vary because of unequal expression levels or differing purification yields.

////



c) Is there a notable difference in normalized fluorescence intensity between your control and
mutant samples? If yes, what does this suggest about the samples? If not, what does it mean? Explain.


Yes, both mutants (M3 and M4) show higher normalized fluorescence than the wild-type C.
This suggests that their mutations may have increased fluorescence efficiency or structural stability,
possibly improving chromophore folding or maturation.

However, further assays (e.g., spectrofluorometry in Lab 10) are required to confirm these differences,
since ChemiDoc measurements provide only crude fluorescence estimates.


///

Yes, the mutants had greater normalized fluorescence intensity than the control, indicating that the 
mutations likely enhanced brightness or folding efficiency of mNeonGreen.


////