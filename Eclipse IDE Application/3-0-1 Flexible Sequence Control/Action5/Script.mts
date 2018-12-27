' (c) 2018 - Amir Banaouas - Solution Practical Part of Thesis
' This code segment is licensed GPLv3  under GNU license (See ReadMe.txt for details)


'closes the Welcome tab if it exists
If JavaWindow("Eclipse").JavaTab("CTabFolder_2").Exist Then
	JavaWindow("Eclipse").JavaTab("CTabFolder_2").CloseTab "Welcome"
End If

If JavaWindow("Eclipse").JavaMenu("File").JavaMenu("New").Exist Then
	JavaWindow("Eclipse").JavaMenu("File").JavaMenu("New").JavaMenu("label:=Java Project").Select
else	
	Reporter.ReportEvent micFail, "GUI Objects could not be identified or do not exist", ""	
End If

'Starts the Project Creation Process
JavaWindow("Eclipse - new action").JavaWindow("New Java Project").JavaEdit("Project name:_2").Set "Sample Project" @@ hightlight id_;_1246297699_;_script infofile_;_ZIP::ssf14.xml_;_
JavaWindow("Eclipse - new action").JavaWindow("New Java Project").JavaButton("Next >").Click @@ hightlight id_;_2077287145_;_script infofile_;_ZIP::ssf17.xml_;_

'Asks for help in the middle of the task
JavaWindow("Eclipse - new action").JavaWindow("New Java Project").JavaToolbar("ToolBar_2").Press "Java Build Path Help" @@ hightlight id_;_1532153384_;_script infofile_;_ZIP::ssf18.xml_;_
'Checks if the help window appeared
JavaWindow("Help - Eclipse IDE").Check CheckPoint("Help Window Appeared") @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf19.xml_;_
'Gives time for the Help page to load, and the human eye to see its content
wait(6)
JavaWindow("Help - Eclipse IDE").Close @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf20.xml_;_
 @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf22.xml_;_
'Continue the Creation task where interrupted 
JavaWindow("Eclipse - new action").JavaWindow("New Java Project").JavaButton("Finish").Click @@ hightlight id_;_1728183846_;_script infofile_;_ZIP::ssf23.xml_;_



