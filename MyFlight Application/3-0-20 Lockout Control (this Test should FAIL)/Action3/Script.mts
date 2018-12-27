' (c) 2018 - Amir Banaouas - Solution Practical Part of Thesis
' This code segment is licensed under GNU GPLv3  license (See ReadMe.txt for details)


'Check if the Order Button is Disabled when name text field is empty
WpfWindow("HPE MyFlight Sample Application").WpfButton("ORDER").Check CheckPoint("ORDER Button is disabled") @@ hightlight id_;_2111489560_;_script infofile_;_ZIP::ssf1.xml_;_
WpfWindow("HPE MyFlight Sample Application").WpfEdit("passengerName").Set "Gui Tester"
'Check if the Order Button is Enabled when name text field contains a string
WpfWindow("HPE MyFlight Sample Application").WpfButton("ORDER").Check CheckPoint("ORDER Button is enabled") @@ hightlight id_;_2111439544_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("HPE MyFlight Sample Application").WpfButton("ORDER").Click

'Check if the Order Button is Disabled again (SHOULD REPORT A FAIL BECAUSE THE GUIDELINE IS VIOLATED)
If WpfWindow("HPE MyFlight Sample Application").WpfButton("ORDER").GetROProperty ("enabled") = True Then
Reporter.ReportEvent micFail, "Usability Issue Detected: Order Button is NOT Locked", "Button is still enabled after clicking it once, and the processing of the first submit is still happening"	
WpfWindow("HPE MyFlight Sample Application").WpfButton("ORDER").Click
WpfWindow("HPE MyFlight Sample Application").WpfProgressBar("progBar").WaitProperty "value", 100
	'Verify if the same Order can be booked one more time immediately after the first booking action
	If WpfWindow("HPE MyFlight Sample Application").WpfObject("Order XX completed").Exist Then
	Reporter.ReportEvent micFail, "Did NOT Prevent Additional Booking Order", "User was able to book the same Order again immediatly after doing it once"	
	else
	Reporter.ReportEvent micPass, "Prevented Additional Order", "The system prevented adding the same order twice"
	End If
else
Reporter.ReportEvent micPass, "Search Button is Locked", "Button is disabled properly after clikcing it once"	
End If

'Waits for the GUI display to change to avoid synchronisation errors
While WpfWindow("HPE MyFlight Sample Application").WpfButton("NEW SEARCH").Exist = False
wait(1)	
Wend

WpfWindow("HPE MyFlight Sample Application").WpfButton("NEW SEARCH").Click

