'closes the Welcome tab if it exists
If JavaWindow("Eclipse").JavaTab("CTabFolder_2").Exist Then
	JavaWindow("Eclipse").JavaTab("CTabFolder_2").CloseTab "Welcome"
End If

If JavaWindow("Eclipse").JavaMenu("File").JavaMenu("New").Exist Then
	JavaWindow("Eclipse").JavaMenu("File").JavaMenu("New").JavaMenu("label:=Java Project").Select
else	
	Reporter.ReportEvent micFail, "GUI Objects could not be identified or do not exist", ""	
End If

'Checks the availability of the main buttons at the start of the creation process
JavaWindow("Eclipse - new action").JavaWindow("New Java Project").JavaButton("Finish").Check CheckPoint("Finish Button should NOT be availble") @@ hightlight id_;_1770850220_;_script infofile_;_ZIP::ssf1.xml_;_
JavaWindow("Eclipse - new action").JavaWindow("New Java Project").JavaButton("Next >").Check CheckPoint("Next Button should NOT be availble") @@ hightlight id_;_1292220721_;_script infofile_;_ZIP::ssf2.xml_;_
JavaWindow("Eclipse - new action").JavaWindow("New Java Project").JavaButton("< Back").Check CheckPoint("Back Button should NOT be availble") @@ hightlight id_;_772676303_;_script infofile_;_ZIP::ssf3.xml_;_
JavaWindow("Eclipse - new action").JavaWindow("New Java Project").JavaButton("Cancel").Check CheckPoint("Cancel Button should availble") @@ hightlight id_;_1658166624_;_script infofile_;_ZIP::ssf4.xml_;_

'Checks the availability of the Select Button before and after filling in the checkbox
JavaWindow("Eclipse - new action").JavaWindow("New Java Project").JavaButton("Select...").Check CheckPoint("Select Button should NOT be availble") @@ hightlight id_;_1745797042_;_script infofile_;_ZIP::ssf5.xml_;_
JavaWindow("Eclipse - new action").JavaWindow("New Java Project").JavaCheckBox("Add project to working").Set "ON" @@ hightlight id_;_705467145_;_script infofile_;_ZIP::ssf6.xml_;_
JavaWindow("Eclipse - new action").JavaWindow("New Java Project").JavaButton("Select...").Check CheckPoint("Select Button should NOW be availble") @@ hightlight id_;_1745797042_;_script infofile_;_ZIP::ssf7.xml_;_

JavaWindow("Eclipse - new action").JavaWindow("New Java Project").JavaEdit("Project name:").Set "Sample Project"
'Checks the availability of the main buttons after entering a project name
JavaWindow("Eclipse - new action").JavaWindow("New Java Project").JavaButton("< Back").Check CheckPoint("Back Button should continue NOT to be availble") @@ hightlight id_;_772676303_;_script infofile_;_ZIP::ssf8.xml_;_
JavaWindow("Eclipse - new action").JavaWindow("New Java Project").JavaButton("Next >").Check CheckPoint("Next Button should NOW be availble") @@ hightlight id_;_1292220721_;_script infofile_;_ZIP::ssf9.xml_;_

JavaWindow("Eclipse - new action").JavaWindow("New Java Project").JavaButton("Next >").Click @@ hightlight id_;_1292220721_;_script infofile_;_ZIP::ssf10.xml_;_
'Checks the availability of the main buttons after clicking NEXT
JavaWindow("Eclipse - new action").JavaWindow("New Java Project").JavaButton("< Back").Check CheckPoint("Back Button should NOW be availble") @@ hightlight id_;_772676303_;_script infofile_;_ZIP::ssf11.xml_;_
JavaWindow("Eclipse - new action").JavaWindow("New Java Project").JavaButton("Next >").Check CheckPoint("Next should be disabled again") @@ hightlight id_;_1292220721_;_script infofile_;_ZIP::ssf13.xml_;_
JavaWindow("Eclipse - new action").JavaWindow("New Java Project").JavaButton("Finish").Check CheckPoint("Finish Button should continue to be availble") @@ hightlight id_;_1770850220_;_script infofile_;_ZIP::ssf12.xml_;_

JavaWindow("Eclipse - new action").JavaWindow("New Java Project").JavaButton("Finish").Click

