' (c) 2018 - Amir Banaouas - Solution Practical Part of Thesis
' This code segment is licensed under GNU GPLv3  license (See ReadMe.txt for details)


'closes the Welcome tab if it exists
If JavaWindow("Eclipse").JavaTab("CTabFolder_2").Exist Then
	JavaWindow("Eclipse").JavaTab("CTabFolder_2").CloseTab "Welcome"
End If

If JavaWindow("Eclipse").JavaMenu("File").JavaMenu("New").Exist Then
	JavaWindow("Eclipse").JavaMenu("File").JavaMenu("New").JavaMenu("label:=Java Project").Select
else	
	Reporter.ReportEvent micFail, "GUI Objects could not be identified or do not exist", ""	
End If

JavaWindow("Eclipse - new action").JavaWindow("New Java Project").JavaEdit("Project name:").Set "Sample Project"
JavaWindow("Eclipse - new action").JavaWindow("New Java Project").JavaButton("Next >").Click
JavaWindow("Eclipse - new action").JavaWindow("New Java Project").JavaButton("Finish").Click

