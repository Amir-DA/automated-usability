' (c) 2018 - Amir Banaouas - Solution Practical Part of Thesis
' This code segment is licensed under GNU GPLv3  license (See ReadMe.txt for details)

WpfWindow("HPE MyFlight Sample Application").WpfEdit("agentName").Set "john"
WpfWindow("HPE MyFlight Sample Application").WpfEdit("password").SetSecure "5b51f6f18e41810734bb"

loginStarted = timer
WpfWindow("HPE MyFlight Sample Application").WpfButton("OK").Click
If WpfWindow("HPE MyFlight Sample Application").WpfComboBox("fromCity").Exist Then
	loginFinished = timer
	loginTime = loginFinished - loginStarted	
	If loginTime < 1 Then
		Reporter.ReportEvent micPass, "Login Response Time is less than a second", "The user's flow of thought is uninterrupted"	
	else
		Reporter.ReportEvent micFail, "Login Response Time is longer than a second", "The user's flow of thought might be interrupted"
	End If
End If

WpfWindow("HPE MyFlight Sample Application").WpfComboBox("fromCity").Select "San Francisco"
WpfWindow("HPE MyFlight Sample Application").WpfComboBox("toCity").Select "Sydney"
WpfWindow("HPE MyFlight Sample Application").WpfCalendar("datePicker").SetDate DateAdd("d", 1, now())
WpfWindow("HPE MyFlight Sample Application").WpfComboBox("Class").Select "First"
WpfWindow("HPE MyFlight Sample Application").WpfComboBox("numOfTickets").Select "2"

searchStarted = timer
WpfWindow("HPE MyFlight Sample Application").WpfButton("FIND FLIGHTS").Click

If WpfWindow("HPE MyFlight Sample Application").WpfTable("flightsDataGrid").Exist Then
	searchEnded = timer
	searchTime = searchEnded - searchStarted 
	If searchTime < 1 Then
		Reporter.ReportEvent micPass, "Searching Flights Response Time is less than a second", "The user's flow of thought is uninterrupted"	
	else
		Reporter.ReportEvent micFail, "Searching Flights Response Time is longer than a second", "The user's flow of thought might be interrupted"
	End If	
End If

WpfWindow("HPE MyFlight Sample Application").WpfTable("flightsDataGrid").SelectCell "0", "0"

