' (c) 2018 - Amir Banaouas - Solution Practical Part of Thesis
' This code segment is licensed under GNU GPLv3  license (See ReadMe.txt for details)


'Deletes the last added prespective and resets the Java Perspective to default
JavaWindow("Eclipse - new action").JavaMenu("Window").JavaMenu("Preferences").Select @@ hightlight id_;_1793501051_;_script infofile_;_ZIP::ssf1.xml_;_
JavaWindow("Eclipse - new action").JavaWindow("Preferences").JavaTree("Tree").Expand "General" @@ hightlight id_;_1499941162_;_script infofile_;_ZIP::ssf2.xml_;_
JavaWindow("Eclipse - new action").JavaWindow("Preferences").JavaTree("Tree").Select "General;Perspectives" @@ hightlight id_;_1499941162_;_script infofile_;_ZIP::ssf3.xml_;_
JavaWindow("Eclipse - new action").JavaWindow("Preferences").JavaTable("Available perspectives:").SelectCell "5","0" @@ hightlight id_;_1775213259_;_script infofile_;_ZIP::ssf4.xml_;_
JavaWindow("Eclipse - new action").JavaWindow("Preferences").JavaTable("Available perspectives:").ActivateCell "5","0" @@ hightlight id_;_1775213259_;_script infofile_;_ZIP::ssf5.xml_;_
JavaWindow("Eclipse - new action").JavaWindow("Preferences").JavaButton("Delete").Click @@ hightlight id_;_661217759_;_script infofile_;_ZIP::ssf6.xml_;_
JavaWindow("Eclipse - new action").JavaWindow("Preferences").JavaWindow("Delete Perspective").JavaStaticText("Are you sure you want").Check CheckPoint("Correct Perspective will be deleted") @@ hightlight id_;_1834186423_;_script infofile_;_ZIP::ssf22.xml_;_
JavaWindow("Eclipse - new action").JavaWindow("Preferences").JavaWindow("Delete Perspective").JavaButton("Yes").Click @@ hightlight id_;_1544767686_;_script infofile_;_ZIP::ssf7.xml_;_
JavaWindow("Eclipse - new action").JavaWindow("Preferences").JavaButton("Apply and Close").Click
JavaWindow("Eclipse - new action").JavaMenu("Window").JavaMenu("Perspective").Select
Window("Eclipse IDE").WinObject("SysTreeView32").Type  micDwn + micRight + micDwn + micReturn 
JavaWindow("Eclipse - new action").JavaMenu("Window").JavaMenu("Perspective").JavaMenu("Reset Perspective...").Select
JavaWindow("Eclipse - new action").JavaWindow("Reset Perspective").JavaButton("Reset Perspective").Check CheckPoint("Reset Perspective Button Exists") @@ hightlight id_;_1524888886_;_script infofile_;_ZIP::ssf2.xml_;_
JavaWindow("Eclipse - new action").JavaWindow("Reset Perspective").JavaButton("Reset Perspective").Click @@ hightlight id_;_1524888886_;_script infofile_;_ZIP::ssf3.xml_;_


