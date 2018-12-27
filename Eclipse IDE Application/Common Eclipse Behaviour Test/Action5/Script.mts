' (c) 2018 - Amir Banaouas - Solution Practical Part of Thesis
' This code segment is licensed under GNU GPLv3  license (See ReadMe.txt for details)

JavaWindow("Eclipse").JavaMenu("Window_2").JavaMenu("Preferences").Select @@ hightlight id_;_936924719_;_script infofile_;_ZIP::ssf1.xml_;_
JavaWindow("Eclipse").JavaWindow("Preferences").JavaTree("Tree").Expand "General"
JavaWindow("Eclipse").JavaWindow("Preferences").JavaTree("Tree").Select "General;Startup and Shutdown" @@ hightlight id_;_1670055419_;_script infofile_;_ZIP::ssf6.xml_;_
JavaWindow("Eclipse").JavaWindow("Preferences").JavaTree("Tree").Expand "General;Startup and Shutdown" @@ hightlight id_;_1670055419_;_script infofile_;_ZIP::ssf7.xml_;_
JavaWindow("Eclipse").JavaWindow("Preferences").JavaTree("Tree").Select "General;Startup and Shutdown;Workspaces" @@ hightlight id_;_1670055419_;_script infofile_;_ZIP::ssf8.xml_;_
JavaWindow("Eclipse").JavaWindow("Preferences").JavaCheckBox("Prompt for workspace on").Set "ON" @@ hightlight id_;_2080214930_;_script infofile_;_ZIP::ssf9.xml_;_
JavaWindow("Eclipse").JavaWindow("Preferences").JavaButton("Apply and Close").Click @@ hightlight id_;_521398971_;_script infofile_;_ZIP::ssf10.xml_;_

'restart application
RunAction "Close Application", oneIteration
wait(1)
RunAction "Start Application", oneIteration


