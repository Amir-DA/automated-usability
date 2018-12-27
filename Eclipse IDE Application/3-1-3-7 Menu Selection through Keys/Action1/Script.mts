' (c) 2018 - Amir Banaouas - Solution Practical Part of Thesis
' This code segment is licensed under GNU GPLv3  license (See ReadMe.txt for details)

 @@ hightlight id_;_3410514_;_script infofile_;_ZIP::ssf2.xml_;_
'Press keys to Prompt New Java Class Window 
Window("Eclipse IDE").WinObject("SysTreeView32").Type micShiftDwn + micAltDwn + "N" + micAltUp + micShiftUp @@ hightlight id_;_2099978_;_script infofile_;_ZIP::ssf3.xml_;_
Window("Eclipse IDE").WinObject("SysTreeView32").Type  micDwn + micDwn + micDwn + micDwn + micReturn @@ hightlight id_;_3475392_;_script infofile_;_ZIP::ssf12.xml_;_

If JavaWindow("Eclipse").JavaWindow("New Java Class").Exist Then
	
	Reporter.ReportEvent micPass, "Successfully Opened New Java Class Window with only Key Entries", "By pressing keys, the correct Window opened up"
	JavaWindow("Eclipse").JavaWindow("New Java Class").JavaEdit("Name:").Set "HelloWorld"
	JavaWindow("Eclipse").JavaWindow("New Java Class").JavaButton("Finish").Click @@ hightlight id_;_630605810_;_script infofile_;_ZIP::ssf21.xml_;_
	JavaWindow("Eclipse Local").JavaEdit("StyledText").SetFocus
	JavaWindow("Eclipse Local").JavaEdit("StyledText").Set "" + vbCrLf + "public class HelloWorld {" + vbCrLf + "" + vbCrLf + "    public static void main(String[] args) {" + vbCrLf + "        // Prints out ""Hello, World"" on the Output Consol." + vbCrLf + "        System.out.println(""Hello, World: Menu Selection through keys is being tested"");" + vbCrLf + "    }" + vbCrLf + "" + vbCrLf + "}" @@ hightlight id_;_879576090_;_script infofile_;_ZIP::ssf8.xml_;_
else
	Reporter.ReportEvent micFail, "Unable to Open New Java Class Window with Key Entries ", "The new Window was not identified or was not displayed"
End If


