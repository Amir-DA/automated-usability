' (c) 2018 - Amir Banaouas - Solution Practical Part of Thesis
' This code segment is licensed under GNU GPLv3  license (See ReadMe.txt for details)

WpfWindow("HPE MyFlight Sample Application").Type micTab
WpfWindow("HPE MyFlight Sample Application").WpfEdit("passengerName").Check CheckPoint("Name Text Field has Cursor Focus")
WpfWindow("HPE MyFlight Sample Application").WpfEdit("passengerName").Set "Gui Tester"

WpfWindow("HPE MyFlight Sample Application").Type micTab
WpfWindow("HPE MyFlight Sample Application").WpfButton("NEW SEARCH").Check CheckPoint("NEW SEARCH Button has Cursor Focus") @@ hightlight id_;_2056275648_;_script infofile_;_ZIP::ssf2.xml_;_

WpfWindow("HPE MyFlight Sample Application").Type micTab
WpfWindow("HPE MyFlight Sample Application").WpfButton("ORDER").Check CheckPoint("ORDER Button has Cursor Focus") @@ hightlight id_;_1973006832_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("HPE MyFlight Sample Application").WpfButton("ORDER").Click

WpfWindow("HPE MyFlight Sample Application").WpfProgressBar("progBar").WaitProperty "value", 100

' waits for the order button to disappear
wait(1)


