' (c) 2018 - Amir Banaouas - Solution Practical Part of Thesis
' This code segment is licensed under GNU GPLv3  license (See ReadMe.txt for details)

'choose a day 3 days in the future
WpfWindow("HPE MyFlight Sample Application").WpfCalendar("datePicker").SetDate DateAdd("d", 3, now())
'waits 1 second so the human eye can follow the change
wait(1)
WpfWindow("HPE MyFlight Sample Application").WpfButton("FIND FLIGHTS").Click
