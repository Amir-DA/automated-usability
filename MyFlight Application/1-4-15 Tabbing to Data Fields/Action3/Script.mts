' (c) 2018 - Amir Banaouas - Solution Practical Part of Thesis
' This code segment is licensed under GNU GPLv3  license (See ReadMe.txt for details)

WpfWindow("HPE MyFlight Sample Application").Type micTab + micTab
WpfWindow("HPE MyFlight Sample Application").WpfComboBox("fromCity").Check CheckPoint("fromCity has Cursor Focus") @@ hightlight id_;_1916664336_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("HPE MyFlight Sample Application").WpfComboBox("fromCity").Select "San Francisco"

WpfWindow("HPE MyFlight Sample Application").Type micTab
WpfWindow("HPE MyFlight Sample Application").WpfComboBox("toCity").Check CheckPoint("toCity has Cursor Focus") @@ hightlight id_;_1916693616_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("HPE MyFlight Sample Application").WpfComboBox("toCity").Select "Sydney"

WpfWindow("HPE MyFlight Sample Application").Type micTab
WpfWindow("HPE MyFlight Sample Application").WpfCalendar("datePicker").Check CheckPoint("datePicker is selected") @@ hightlight id_;_1916699424_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("HPE MyFlight Sample Application").WpfCalendar("datePicker").SetDate DateAdd("d", 1, now())

WpfWindow("HPE MyFlight Sample Application").Type micTab
WpfWindow("HPE MyFlight Sample Application").WpfComboBox("Class").Check CheckPoint("Class") @@ hightlight id_;_1916701152_;_script infofile_;_ZIP::ssf5.xml_;_
WpfWindow("HPE MyFlight Sample Application").WpfComboBox("Class").Select "First"

WpfWindow("HPE MyFlight Sample Application").Type micTab
WpfWindow("HPE MyFlight Sample Application").WpfComboBox("numOfTickets").Check CheckPoint("numOfTickets has Cursor Focus") @@ hightlight id_;_1981776664_;_script infofile_;_ZIP::ssf6.xml_;_
WpfWindow("HPE MyFlight Sample Application").WpfComboBox("numOfTickets").Select "2"

WpfWindow("HPE MyFlight Sample Application").Type micTab
WpfWindow("HPE MyFlight Sample Application").WpfButton("FIND FLIGHTS").Check CheckPoint("FIND FLIGHTS button has Cursor Focus") @@ hightlight id_;_1981785496_;_script infofile_;_ZIP::ssf7.xml_;_
WpfWindow("HPE MyFlight Sample Application").WpfButton("FIND FLIGHTS").Click

