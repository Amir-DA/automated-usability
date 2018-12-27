' (c) 2018 - Amir Banaouas - Solution Practical Part of Thesis
' This code segment is licensed under GNU GPLv3  license (See ReadMe.txt for details)


'Presses the buttons Cltr + s to save @@ hightlight id_;_461910_;_script infofile_;_ZIP::ssf1.xml_;_
Window("Eclipse IDE").WinObject("SWT_Window0").Type micCtrlDwn + "s" + micCtrlUp @@ hightlight id_;_461910_;_script infofile_;_ZIP::ssf2.xml_;_
test = JavaWindow("Eclipse").JavaMenu("File").JavaMenu("Save").GetROProperty("enabled")


'Checks if the project was saved
If JavaWindow("Eclipse").JavaMenu("File").JavaMenu("Save").GetROProperty("enabled") = 1 Then
	print "disabled save"
End If



