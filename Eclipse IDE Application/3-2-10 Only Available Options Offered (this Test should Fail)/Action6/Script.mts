' (c) 2018 - Amir Banaouas - Solution Practical Part of Thesis
' This code segment is licensed under GNU GPLv3  license (See ReadMe.txt for details)

JavaWindow("Banaouas 0927741 - Practical").JavaMenu("Search").JavaMenu("Search...").Select @@ hightlight id_;_424305981_;_script infofile_;_ZIP::ssf1.xml_;_

'Comment this If block to make the test pass
If JavaWindow("Banaouas 0927741 - Practical").JavaWindow("Search").JavaButton("Search").GetROProperty("enabled") = 1 Then
	Reporter.ReportEvent micFail, "Search Button is available for empty strings in an empty workspace" , "Search Button is enabled when no query was entered" 
else
	Reporter.ReportEvent micPass, "Search Option is available only when appropriate", "Search Option is available only when appropriate"
End If

JavaWindow("Banaouas 0927741 - Practical").JavaWindow("Search").JavaButton("Search").Click
'Checks that the results show 0 Matching Files
JavaWindow("Banaouas 0927741 - Practical").JavaLink("Link").Check CheckPoint("Zero Match in Search Results") @@ hightlight id_;_770745539_;_script infofile_;_ZIP::ssf3.xml_;_


