' (c) 2018 - Amir Banaouas - Solution Practical Part of Thesis
' This code segment is licensed under GNU GPLv3  license (See ReadMe.txt for details)

WpfWindow("HPE MyFlight Sample Application").WpfEdit("passengerName").Set "Gui Tester"
WpfWindow("HPE MyFlight Sample Application").WpfButton("ORDER").Click
WpfWindow("HPE MyFlight Sample Application").WpfProgressBar("progBar").WaitProperty "value", 100


While WpfWindow("HPE MyFlight Sample Application").WpfButton("NEW SEARCH").Exist = False
wait(1)	
Wend

