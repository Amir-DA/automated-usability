' (c) 2018 - Amir Banaouas - Solution Practical Part of Thesis
' This code segment is licensed under GNU GPLv3  license (See ReadMe.txt for details)

'closes the Welcome tab if it exists
If JavaWindow("Eclipse").JavaTab("CTabFolder_2").Exist Then
	JavaWindow("Eclipse").JavaTab("CTabFolder_2").CloseTab "Welcome"
End If

wait(1)
If JavaWindow("Eclipse - new action").JavaMenu("Window").JavaMenu("Show View").Exist = false Then
	Reporter.ReportEvent micFail, "Displaying Additional Views Not Possible", "Tool Couldn't identify the <Show View> Menu item"
End If

'Opens more views and tabs in the Perspective
JavaWindow("Eclipse - new action").JavaMenu("Window").JavaMenu("Show View").JavaMenu("label:=Javadoc").Select
JavaWindow("Eclipse - new action").JavaMenu("Window").JavaMenu("Show View").JavaMenu("label:=Search").Select @@ hightlight id_;_1605734165_;_script infofile_;_ZIP::ssf30.xml_;_
JavaWindow("Eclipse - new action").JavaMenu("Window").JavaMenu("Show View").JavaMenu("Tasks").Select @@ hightlight id_;_1994710867_;_script infofile_;_ZIP::ssf31.xml_;_
JavaWindow("Eclipse - new action").JavaMenu("Window").JavaMenu("Show View").JavaMenu("Task List").Select @@ hightlight id_;_993016696_;_script infofile_;_ZIP::ssf6.xml_;_
JavaWindow("Eclipse - new action").JavaMenu("Window").JavaMenu("Show View").JavaMenu("Package Explorer").Select
JavaWindow("Eclipse - new action").JavaMenu("Window").JavaMenu("Show View").JavaMenu("Problems").Select
JavaWindow("Eclipse - new action").JavaMenu("Window").JavaMenu("Show View").JavaMenu("Console").Select @@ hightlight id_;_1653564461_;_script infofile_;_ZIP::ssf3.xml_;_
JavaWindow("Eclipse - new action").JavaMenu("Window").JavaMenu("Show View").JavaMenu("Ant").Select @@ hightlight id_;_1909317132_;_script infofile_;_ZIP::ssf4.xml_;_
JavaWindow("Eclipse - new action").JavaMenu("Window").JavaMenu("Show View").JavaMenu("Outline").Select @@ hightlight id_;_255172197_;_script infofile_;_ZIP::ssf5.xml_;_
JavaWindow("Eclipse - new action").JavaMenu("Window").JavaMenu("Show View").JavaMenu("Declaration").Select @@ hightlight id_;_19919839_;_script infofile_;_ZIP::ssf7.xml_;_
JavaWindow("Eclipse - new action").JavaMenu("Window").JavaMenu("Show View").JavaMenu("Navigator").Select
JavaWindow("Eclipse - new action").JavaMenu("Window").JavaMenu("Show View").JavaMenu("Type Hierarchy").Select @@ hightlight id_;_1504482477_;_script infofile_;_ZIP::ssf9.xml_;_
JavaWindow("Eclipse - new action").JavaMenu("Window").JavaMenu("Show View").JavaMenu("Templates").Select @@ hightlight id_;_179688904_;_script infofile_;_ZIP::ssf10.xml_;_

ViewsPresent = True
If JavaWindow("Eclipse - new action").JavaTab("tab3").Exist Then	 
Reporter.ReportEvent micDone, "Newly Added View was Found", ""	
else
ViewsPresent = False
Reporter.ReportEvent micFail, "Displaying Views in  <tab3>  was Unsuccessful", "Could not find added View in: tab 3"	  
End If	
If ViewsPresent Then
Reporter.ReportEvent micPass, "Displayed Additional Views in the same Perspective Successfully", "The Perspective holds almost all available Views at the same time"		
End If


'Closes all views and tabs in the Perspective
JavaWindow("Eclipse - new action").JavaTab("CTabFolder_10").CloseTab "Declaration" @@ hightlight id_;_927581868_;_script infofile_;_ZIP::ssf1.xml_;_
JavaWindow("Eclipse - new action").JavaTab("No consoles to display").CloseTab "Console" @@ hightlight id_;_927581868_;_script infofile_;_ZIP::ssf2.xml_;_
JavaWindow("Eclipse - new action").JavaTab("0 items").CloseTab "Problems" @@ hightlight id_;_927581868_;_script infofile_;_ZIP::ssf3.xml_;_
JavaWindow("Eclipse - new action").JavaTab("0 items_2").CloseTab "Tasks" @@ hightlight id_;_927581868_;_script infofile_;_ZIP::ssf4.xml_;_
JavaWindow("Eclipse - new action").JavaTab("CTabFolder_11").CloseTab "Search" @@ hightlight id_;_927581868_;_script infofile_;_ZIP::ssf5.xml_;_
JavaWindow("Eclipse - new action").JavaTab("CTabFolder_12").CloseTab "Javadoc" @@ hightlight id_;_927581868_;_script infofile_;_ZIP::ssf6.xml_;_
JavaWindow("Eclipse - new action").JavaTab("No templates available._3").CloseTab "Templates" @@ hightlight id_;_406952631_;_script infofile_;_ZIP::ssf7.xml_;_
JavaWindow("Eclipse - new action").JavaTab("An outline is not available.").CloseTab "Outline" @@ hightlight id_;_406952631_;_script infofile_;_ZIP::ssf8.xml_;_
JavaWindow("Eclipse - new action").JavaTab("CTabFolder_13").CloseTab "Ant" @@ hightlight id_;_406952631_;_script infofile_;_ZIP::ssf9.xml_;_
JavaWindow("Eclipse - new action").JavaTab("CTabFolder_14").CloseTab "Task List" @@ hightlight id_;_1501084178_;_script infofile_;_ZIP::ssf10.xml_;_
JavaWindow("Eclipse - new action").JavaTab("To display the type hierarchy,").CloseTab "Type Hierarchy" @@ hightlight id_;_623742454_;_script infofile_;_ZIP::ssf11.xml_;_
JavaWindow("Eclipse - new action").JavaTab("CTabFolder_15").CloseTab "Navigator" @@ hightlight id_;_623742454_;_script infofile_;_ZIP::ssf12.xml_;_
JavaWindow("Eclipse - new action").JavaTab("CTabFolder_16").CloseTab "Package Explorer" @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf16.xml_;_
 @@ hightlight id_;_770854681_;_script infofile_;_ZIP::ssf6.xml_;_

wait(1)
RunAction "Save Perspective", oneIteration
RunAction "Reset Windows", oneIteration


