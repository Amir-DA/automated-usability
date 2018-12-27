' (c) 2018 - Amir Banaouas - Solution Practical Part of Thesis
' This code segment is licensed under GNU GPLv3  license (See ReadMe.txt for details)

WpfWindow("HPE MyFlight Sample Application").WpfEdit("passengerName").Set "John Doe"

WpfWindow("HPE MyFlight Sample Application").WpfEdit("passengerName").Output CheckPoint("OutputValueOfCustomerName") @@ hightlight id_;_1945843296_;_script infofile_;_ZIP::ssf1.xml_;_
WpfWindow("HPE MyFlight Sample Application").WpfButton("ORDER").Click
WpfWindow("HPE MyFlight Sample Application").WpfProgressBar("progBar").WaitProperty "value", 100

'Waits for the GUI display to change to avoid synchronisation errors
While WpfWindow("HPE MyFlight Sample Application").WpfButton("NEW SEARCH").Exist = False
wait(1)	
Wend

WpfWindow("HPE MyFlight Sample Application").WpfButton("NEW SEARCH").Click


