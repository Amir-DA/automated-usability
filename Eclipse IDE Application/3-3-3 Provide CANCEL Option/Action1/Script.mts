' (c) 2018 - Amir Banaouas - Solution Practical Part of Thesis
' This code segment is licensed under GNU GPLv3  license (See ReadMe.txt for details)
 
wait(1)

JavaWindow("Eclipse").JavaTree("Tree").Select "Sample Project" @@ hightlight id_;_941702906_;_script infofile_;_ZIP::ssf17.xml_;_
JavaWindow("Eclipse").JavaMenu("File_2").JavaMenu("New").JavaMenu("Class").Select @@ hightlight id_;_633324888_;_script infofile_;_ZIP::ssf19.xml_;_
JavaWindow("Eclipse").JavaWindow("New Java Class").JavaEdit("Name:").Set "HelloWorld" @@ hightlight id_;_1601034396_;_script infofile_;_ZIP::ssf20.xml_;_
JavaWindow("Eclipse").JavaWindow("New Java Class").JavaButton("Finish").Click @@ hightlight id_;_630605810_;_script infofile_;_ZIP::ssf21.xml_;_
JavaWindow("Eclipse").JavaTree("Tree").Expand "Sample Project" @@ hightlight id_;_1019562230_;_script infofile_;_ZIP::ssf5.xml_;_
JavaWindow("Eclipse Local").JavaEdit("StyledText").SetFocus
JavaWindow("Eclipse Local").JavaEdit("StyledText").Set "" + vbCrLf + "public class HelloWorld {" + vbCrLf + "" + vbCrLf + "    public static void main(String[] args) {" + vbCrLf + "        // Prints out ""Hello, World"" on the Output Consol." + vbCrLf + "        System.out.println(""Hello, World: the CANCEL Operation is being tested"");" + vbCrLf + "    }" + vbCrLf + "" + vbCrLf + "}" @@ hightlight id_;_879576090_;_script infofile_;_ZIP::ssf8.xml_;_

wait(1)

'Try to close tab, then cancel action
JavaWindow("Eclipse Local").JavaTab("CTabFolder_2").CloseTab "*HelloWorld.java" @@ hightlight id_;_890084643_;_script infofile_;_ZIP::ssf2.xml_;_
If JavaWindow("Eclipse Local").JavaWindow("Save Resource").Exist Then
	JavaWindow("Eclipse Local").JavaWindow("Save Resource").JavaButton("Cancel").Click
	Reporter.ReportEvent micPass, "Data Loss was prevented when closing the tab", "The user was able to cancel closing the tab"
else
	Reporter.ReportEvent micFail, "Cancel Operation is not Possible", "The Cancel Button was not identidied or is not visible"
End If

wait(1) @@ hightlight id_;_1567482446_;_script infofile_;_ZIP::ssf3.xml_;_
'this time, close tab and save for real
JavaWindow("Eclipse Local").JavaTab("CTabFolder_2").CloseTab "*HelloWorld.java" @@ hightlight id_;_890084643_;_script infofile_;_ZIP::ssf2.xml_;_
JavaWindow("Eclipse Local").JavaWindow("Save Resource").JavaButton("Save").Click


