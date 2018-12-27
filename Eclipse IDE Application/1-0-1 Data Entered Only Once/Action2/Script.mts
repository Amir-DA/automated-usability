' (c) 2018 - Amir Banaouas - Solution Practical Part of Thesis
' This code segment is licensed under GNU GPLv3  license (See ReadMe.txt for details)

'closes the Welcome tab if it exists
If JavaWindow("Eclipse").JavaTab("CTabFolder_2").Exist Then
	JavaWindow("Eclipse").JavaTab("CTabFolder_2").CloseTab "Welcome"
End If

If JavaWindow("Eclipse").JavaMenu("File").JavaMenu("New").Exist Then
	JavaWindow("Eclipse").JavaMenu("File").JavaMenu("New").JavaMenu("label:=Java Project").Select
else	
	Reporter.ReportEvent micFail, "GUI Objects could not be identified or do not exist", "File => New Button was not found"	
End If
 
JavaWindow("Eclipse - new action").JavaWindow("New Java Project").JavaEdit("Project name:").Set "Sample Project"
JavaWindow("Eclipse - new action").JavaWindow("New Java Project").JavaButton("Next >").Click @@ hightlight id_;_1268982338_;_script infofile_;_ZIP::ssf3.xml_;_
JavaWindow("Eclipse - new action").JavaWindow("New Java Project").JavaTree("Tree").Select "Sample Project" @@ hightlight id_;_890411934_;_script infofile_;_ZIP::ssf4.xml_;_

'Checks if the entered text was remembered before the operation is completed
JavaWindow("Eclipse - new action").JavaWindow("New Java Project").JavaTree("Tree").Check CheckPoint("Tree has Text Sample Project") @@ hightlight id_;_890411934_;_script infofile_;_ZIP::ssf5.xml_;_
JavaWindow("Eclipse - new action").JavaWindow("New Java Project").JavaButton("Finish").Click @@ hightlight id_;_1478434624_;_script infofile_;_ZIP::ssf6.xml_;_



