' (c) 2018 - Amir Banaouas - Solution Practical Part of Thesis
' This code segment is licensed under GNU GPLv3  license (See ReadMe.txt for details)

WpfWindow("HPE MyFlight Sample Application").WpfComboBox("fromCity").Select "San Francisco"
WpfWindow("HPE MyFlight Sample Application").WpfComboBox("toCity").Select "Sydney"
WpfWindow("HPE MyFlight Sample Application").WpfCalendar("datePicker").SetDate DateAdd("d", 1, now())
WpfWindow("HPE MyFlight Sample Application").WpfComboBox("Class").Select "First"
WpfWindow("HPE MyFlight Sample Application").WpfComboBox("numOfTickets").Select "2"
WpfWindow("HPE MyFlight Sample Application").WpfButton("FIND FLIGHTS").Click

