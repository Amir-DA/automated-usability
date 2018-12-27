' (c) 2018 - Amir Banaouas - Solution Practical Part of Thesis
' This code segment is licensed under GNU GPLv3  license (See ReadMe.txt for details)

JavaWindow("Eclipse Local Rep").JavaTree("Tree").Select "Sample Project" @@ hightlight id_;_941702906_;_script infofile_;_ZIP::ssf8.xml_;_
 @@ hightlight id_;_3933496_;_script infofile_;_ZIP::ssf9.xml_;_
Window("Eclipse IDE").WinObject("SysTreeView32_2").Type  micDel @@ hightlight id_;_3933496_;_script infofile_;_ZIP::ssf13.xml_;_
'Presses the Space-bar
Window("Eclipse IDE").Window("Delete Resources").WinObject("Are you sure you want").Type " " @@ hightlight id_;_396436_;_script infofile_;_ZIP::ssf14.xml_;_
'Verifies if the Checkbox is checked in after the key press
JavaWindow("Eclipse Local Rep").JavaWindow("Delete Resources").JavaCheckBox("Delete project contents").Check CheckPoint("Delete project Checkbox is checked") @@ hightlight id_;_1521769830_;_script infofile_;_ZIP::ssf15.xml_;_
Window("Eclipse IDE").Window("Delete Resources").WinObject("Are you sure you want").Type  micReturn @@ hightlight id_;_658596_;_script infofile_;_ZIP::ssf20.xml_;_
 @@ hightlight id_;_1076708806_;_script infofile_;_ZIP::ssf6.xml_;_

