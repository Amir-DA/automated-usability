' (c) 2018 - Amir Banaouas - Solution Practical Part of Thesis
' This code segment is licensed under GNU GPLv3  license (See ReadMe.txt for details)

'Waiting to give the human eye time to process the GUI actions taken
wait(1)
If JavaWindow("Eclipse").JavaMenu("Edit").Exist Then
	JavaWindow("Eclipse").JavaMenu("Edit").JavaMenu("Redo").Select
	Reporter.ReportEvent micPass, "REDO Operation was performed to reverse UNDO effect", "It is possible to REDO the program typing to reverse the effect of UNDO"
else	
	Reporter.ReportEvent micFail, "UNDO Operation was not possible", "Edit GUI Object could not be identified or do not exist"	
End If

