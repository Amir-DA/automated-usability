' (c) 2018 - Amir Banaouas - Solution Practical Part of Thesis
' This code segment is licensed under GNU GPLv3  license (See ReadMe.txt for details)


'Prepares a new perspective
JavaWindow("Eclipse - new action").JavaMenu("Window").JavaMenu("Show View").JavaMenu("Package Explorer").Select @@ hightlight id_;_2035509662_;_script infofile_;_ZIP::ssf1.xml_;_
JavaWindow("Eclipse - new action").JavaMenu("Window").JavaMenu("Show View").JavaMenu("Console").Select
JavaWindow("Eclipse - new action").JavaMenu("Window").JavaMenu("Show View").JavaMenu("Ant").Select @@ hightlight id_;_279657408_;_script infofile_;_ZIP::ssf3.xml_;_
JavaWindow("Eclipse - new action").JavaMenu("Window").JavaMenu("Perspective").JavaMenu("Save Perspective As...").Select @@ hightlight id_;_61320148_;_script infofile_;_ZIP::ssf4.xml_;_
JavaWindow("Eclipse - new action").JavaWindow("Save Perspective As...").JavaEdit("Name:").Set "Minimalistic Java Perspective" @@ hightlight id_;_2020635571_;_script infofile_;_ZIP::ssf5.xml_;_

'Check if the new Perspective can be saved
JavaWindow("Eclipse - new action").JavaWindow("Save Perspective As...").JavaButton("Save").Check CheckPoint("Saving a New Perspective Possible") @@ hightlight id_;_1478284358_;_script infofile_;_ZIP::ssf6.xml_;_
JavaWindow("Eclipse - new action").JavaWindow("Save Perspective As...").JavaButton("Save").Click @@ hightlight id_;_1478284358_;_script infofile_;_ZIP::ssf7.xml_;_

'Check if the new Perspective is present among the list of Perspectives
If JavaWindow("Eclipse - new action").JavaMenu("Window").JavaMenu("Perspective").JavaMenu("Open Perspective").Exist Then
	JavaWindow("Eclipse - new action").JavaMenu("Window").JavaMenu("Perspective").Select		
	Window("Eclipse IDE").WinObject("SysTreeView32").Type  micDwn + micRight + micDwn + micDwn + micReturn 
	JavaWindow("Eclipse - new action").JavaWindow("Open Perspective").JavaTable("Table").Check CheckPoint("Newly Added Perspective Is Saved") @@ hightlight id_;_805326571_;_script infofile_;_ZIP::ssf10.xml_;_
	JavaWindow("Eclipse - new action").JavaWindow("Open Perspective").JavaButton("Cancel").Click @@ hightlight id_;_1268471769_;_script infofile_;_ZIP::ssf12.xml_;_
End If

 @@ hightlight id_;_1334234448_;_script infofile_;_ZIP::ssf14.xml_;_

