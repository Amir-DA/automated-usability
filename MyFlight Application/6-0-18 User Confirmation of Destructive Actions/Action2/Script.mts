' (c) 2018 - Amir Banaouas - Solution Practical Part of Thesis
' This code segment is licensed under GNU GPLv3  license (See ReadMe.txt for details)


WpfWindow("HPE MyFlight Sample Application").WpfButton("WpfButton").Click @@ hightlight id_;_2127516016_;_script infofile_;_ZIP::ssf1.xml_;_

WpfWindow("HPE MyFlight Sample Application").Dialog("Notification").WinButton("Nein").Check CheckPoint("User is Asked to Confirm Delete Action") @@ hightlight id_;_1509846_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("HPE MyFlight Sample Application").Dialog("Notification").WinButton("Nein").Click @@ hightlight id_;_1509846_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("HPE MyFlight Sample Application").WpfButton("WpfButton").Click
WpfWindow("HPE MyFlight Sample Application").Dialog("Notification").WinButton("Ja").Click

'wait for the progress bar to finish loding. It emulates processing time.
WpfWindow("HPE MyFlight Sample Application").WpfProgressBar("progBar").WaitProperty "value", 100

