' (c) 2018 - Amir Banaouas - Solution Practical Part of Thesis
' This code segment is licensed under GNU GPLv3  license (See ReadMe.txt for details)

WpfWindow("HPE MyFlight Sample Application").WpfComboBox("fromCity").Select "San Francisco" 
WpfWindow("HPE MyFlight Sample Application").WpfComboBox("toCity").Select "London"

'selects a data 3 days in the past
WpfWindow("HPE MyFlight Sample Application").WpfCalendar("datePicker").SetDate DateAdd("d", -3, now())

'error message should not appear yet
If WpfWindow("MyFlight Sample Application").Dialog("Error").Exist Then
	Reporter.ReportEvent micFail, "Error message should NOT appear", "Error message disrupts the User by appearing the moment the mistake occured, and before submitting the form"
else
	Reporter.ReportEvent micPass, "Error message should NOT appear", "Error message does not disrupt the user"
End If
WpfWindow("HPE MyFlight Sample Application").WpfComboBox("Class").Select "First"
WpfWindow("HPE MyFlight Sample Application").WpfComboBox("numOfTickets").Select "2"
WpfWindow("HPE MyFlight Sample Application").WpfButton("FIND FLIGHTS").Click

'The error message is only prompted after submitting the search form, and not the moment the mistake is made
WpfWindow("MyFlight Sample Application").Dialog("Error").WinButton("OK").Check CheckPoint("Error message should appear") @@ hightlight id_;_8587630_;_script infofile_;_ZIP::ssf1.xml_;_
WpfWindow("MyFlight Sample Application").Dialog("Error").WinButton("OK").Click
