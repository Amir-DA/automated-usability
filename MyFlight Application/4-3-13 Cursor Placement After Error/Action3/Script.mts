WpfWindow("HPE MyFlight Sample Application").WpfComboBox("fromCity").Select "Zurich"
WpfWindow("HPE MyFlight Sample Application").WpfComboBox("toCity").Select "Portland"

'selects a data 2 days in the past
WpfWindow("HPE MyFlight Sample Application").WpfCalendar("datePicker").SetDate DateAdd("d", -2, now())
WpfWindow("HPE MyFlight Sample Application").WpfButton("FIND FLIGHTS").Click

WpfWindow("HPE MyFlight Sample Application").Dialog("Error").WinButton("OK").Check CheckPoint("Error message should appear") @@ hightlight id_;_8587630_;_script infofile_;_ZIP::ssf1.xml_;_
WpfWindow("HPE MyFlight Sample Application").Dialog("Error").WinButton("OK").Click

If WpfWindow("HPE MyFlight Sample Application").WpfCalendar("datePicker").GetROProperty ("focused") = False Then
	Reporter.ReportEvent micFail, "Cursor Focus is NOT Placed on Erroneous Field", "After the error message was dismissed, the wrong field did not have cursor focus"
else
    Reporter.ReportEvent micPass, "Cursor Focus is Placed on Erroneous Field", "The Date Field has cursor focus after confronting the error message"
End If
