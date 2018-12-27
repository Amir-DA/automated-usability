' (c) 2018 - Amir Banaouas - Solution Practical Part of Thesis
' This code segment is licensed under GNU GPLv3  license (See ReadMe.txt for details)


'Waiting to give the human eye time to process the GUI actions taken
wait(1)
If JavaWindow("Eclipse").JavaMenu("Edit").Exist Then
	JavaWindow("Eclipse").JavaMenu("Edit").JavaMenu("Undo").Select
	Reporter.ReportEvent micPass, "UNDO Operation was performed", "It is possible to UNDO the program typing"
else	
	Reporter.ReportEvent micFail, "UNDO Operation was not possible", "Edit GUI Object could not be identified or do not exist"	
End If


