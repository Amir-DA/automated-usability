' (c) 2018 - Amir Banaouas - Solution Practical Part of Thesis
' This code segment is licensed under GNU GPLv3  license (See ReadMe.txt for details)
 
JavaWindow("Eclipse").JavaTree("Tree").Select "Sample Project" @@ hightlight id_;_941702906_;_script infofile_;_ZIP::ssf17.xml_;_
JavaWindow("Eclipse").JavaMenu("File_2").JavaMenu("New").JavaMenu("Class").Select @@ hightlight id_;_633324888_;_script infofile_;_ZIP::ssf19.xml_;_
JavaWindow("Eclipse").JavaWindow("New Java Class").JavaEdit("Name:").Set "HelloWorld" @@ hightlight id_;_1601034396_;_script infofile_;_ZIP::ssf20.xml_;_
JavaWindow("Eclipse").JavaWindow("New Java Class").JavaButton("Finish").Click @@ hightlight id_;_630605810_;_script infofile_;_ZIP::ssf21.xml_;_
JavaWindow("Eclipse").JavaTree("Tree").Expand "Sample Project" @@ hightlight id_;_1019562230_;_script infofile_;_ZIP::ssf5.xml_;_
JavaWindow("Eclipse Local").JavaEdit("StyledText").SetFocus
JavaWindow("Eclipse Local").JavaEdit("StyledText").Set "" + vbCrLf + "public class HelloWorld {" + vbCrLf + "" + vbCrLf + "    public static void main(String[] args) {" + vbCrLf + "        // Prints out ""Hello, World"" on the Output Screen." + vbCrLf + "        System.out.println(""Hello, World: The Guideline titled Protection from Data Loss is being tested"");" + vbCrLf + "    }" + vbCrLf + "" + vbCrLf + "}" @@ hightlight id_;_879576090_;_script infofile_;_ZIP::ssf8.xml_;_
 @@ hightlight id_;_629306571_;_script infofile_;_ZIP::ssf12.xml_;_
'Closing the tab is an INTERRUPT Action 
JavaWindow("Eclipse Local").JavaTab("CTabFolder_2").CloseTab "*HelloWorld.java" @@ hightlight id_;_890084643_;_script infofile_;_ZIP::ssf2.xml_;_
If JavaWindow("Eclipse Local").JavaWindow("Save Resource").Exist Then
	Reporter.ReportEvent micPass, "Data Loss was prevented when closing the tab", "The user is offered to save his file before closing the tab"
	JavaWindow("Eclipse Local").JavaWindow("Save Resource").JavaButton("Save").Click
else
	Reporter.ReportEvent micFail, "Data loss occured", "The Tab was closed before the user was prompted to save his data"
End If

 @@ hightlight id_;_1567482446_;_script infofile_;_ZIP::ssf3.xml_;_

