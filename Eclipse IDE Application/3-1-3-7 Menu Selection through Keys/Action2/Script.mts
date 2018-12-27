' (c) 2018 - Amir Banaouas - Solution Practical Part of Thesis
' This code segment is licensed under GNU GPLv3  license (See ReadMe.txt for details)


'closes the Welcome tab if it exists
If JavaWindow("Eclipse").JavaTab("CTabFolder_2").Exist Then
	JavaWindow("Eclipse").JavaTab("CTabFolder_2").CloseTab "Welcome"
End If

'Presses the keys: Alt + shift + N 
Window("Eclipse IDE").WinObject("SysTreeView32").Type micShiftDwn + micAltDwn + "N" + micAltUp + micShiftUp @@ hightlight id_;_918742_;_script infofile_;_ZIP::ssf2.xml_;_

'Chooses the JAVA PROJECT Option
Window("Eclipse IDE").WinObject("SysTreeView32").Type  micDwn + micReturn @@ hightlight id_;_918742_;_script infofile_;_ZIP::ssf3.xml_;_
 
'Checks if the New Window appeared as result of the key entries
JavaWindow("Eclipse - new action").JavaWindow("New Java Project").JavaStaticText("Create a Java Project(st)").Check CheckPoint("New Window for Creating a Java Project Appeared") @@ hightlight id_;_588163459_;_script infofile_;_ZIP::ssf5.xml_;_
JavaWindow("Eclipse - new action").JavaWindow("New Java Project").JavaEdit("Project name:").Set "Sample Project"

'Checks if the Finish Button is enabled
JavaWindow("Eclipse - new action").JavaWindow("New Java Project").JavaButton("Finish").Check CheckPoint("Finish Button is now enabled") @@ hightlight id_;_917887967_;_script infofile_;_ZIP::ssf6.xml_;_
JavaWindow("Eclipse - new action").JavaWindow("New Java Project").JavaButton("Finish").Click @@ hightlight id_;_918742_;_script infofile_;_ZIP::ssf3.xml_;_


If JavaWindow("Eclipse").JavaTree("Tree").Exist Then
	JavaWindow("Eclipse").JavaTree("Tree").Select "Sample Project"
	Reporter.ReportEvent micPass, "Created a Project with only Key Entries successfully", "Created a Project with only Key Entries successfully"	
else
	Reporter.ReportEvent micFail, "Creating a Project with only Key Entries failed", "JavaTree was not identified or does not exist"	
End If



