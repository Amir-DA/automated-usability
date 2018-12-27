' (c) 2018 - Amir Banaouas - Solution Practical Part of Thesis
' This code segment is licensed under GNU GPLv3  license (See ReadMe.txt for details)

WpfWindow("HPE MyFlight Sample Application").WpfButton("delete_btn").Click
WpfWindow("HPE MyFlight Sample Application").Dialog("Notification").WinButton("Ja").Click


'wait for the progress bar to finish loding. It emulates processing time.
WpfWindow("HPE MyFlight Sample Application").WpfProgressBar("progBar").Value

