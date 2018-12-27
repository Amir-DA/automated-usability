' (c) 2018 - Amir Banaouas - Solution Practical Part of Thesis
' This code segment is licensed under GNU GPLv3  license (See ReadMe.txt for details)


'Retreive the Environment variable UserName
userName = Environment.Value("UserName")

'Construct a string with the installation path for Eclipse and run it
SystemUtil.Run "C:\Users\" & userName & "\eclipse\java-photon\eclipse\eclipse.exe"

' if asked to choose a workspace at start up, this will create or find (if already created) a speciel folder
' else if the Eclipse Launcher did not appear, the script will work in the last used worksapce
If JavaWindow("Eclipse Launcher").Exist Then
 @@ hightlight id_;_214929887_;_script infofile_;_ZIP::ssf20.xml_;_
'this will extract the workspace's name and compare it with the wanted name
currentWorkspacePath = JavaWindow("Eclipse Launcher").JavaList("Workspace:").GetROProperty ("text") @@ hightlight id_;_1977189075_;_script infofile_;_ZIP::ssf21.xml_;_
currentFolderName = Mid(currentWorkspacePath, InStrRev(currentWorkspacePath, "\") + 1)
wantedFolderName = "Banaouas 0927741 - Practical Part of thesis - Automated Usability Inspection - Eclipse Workspace"

	If currentFolderName <> wantedFolderName Then	

	JavaWindow("Eclipse Launcher").JavaButton("Browse...").Click @@ hightlight id_;_1636824514_;_script infofile_;_ZIP::ssf3.xml_;_
	Window("Eclipse Launcher").Dialog("Select Workspace Directory").WinToolbar("Nach-oben-Symbolleiste").Press 1 @@ hightlight id_;_330140_;_script infofile_;_ZIP::ssf4.xml_;_
	Dim allFolders
	allFolders = Window("Eclipse Launcher").Dialog("Select Workspace Directory").WinObject("Elementansicht").WinList("Elementansicht").GetContent		

		foundWantedFolder = false
		If InStr(allFolders, wantedFolderName) > 0 Then
			'this means the wanted name for a workspace already exists and was found
			foundWantedFolder = true			
		End If
		
		If foundWantedFolder Then								
			Window("Eclipse Launcher").Dialog("Select Workspace Directory").WinObject("Elementansicht").WinList("Elementansicht").Select wantedFolderName		
			Window("Eclipse Launcher").Dialog("Select Workspace Directory").WinButton("Ordner auswählen").Click @@ hightlight id_;_198458_;_script infofile_;_ZIP::ssf27.xml_;_
		else
			'this will create a new folder with the wanted name
			Window("Eclipse Launcher").Dialog("Select Workspace Directory").WinObject("Explorer-Fenster").WinButton("Neuer Ordner").Click @@ hightlight id_;_2092493048_;_script infofile_;_ZIP::ssf5.xml_;_
			Window("Eclipse Launcher").Dialog("Select Workspace Directory").WinEditor("WinEditor").Type wantedFolderName @@ hightlight id_;_854458_;_script infofile_;_ZIP::ssf17.xml_;_
			Window("Eclipse Launcher").Dialog("Select Workspace Directory").WinEditor("WinEditor").Type  micReturn
			Window("Eclipse Launcher").Dialog("Select Workspace Directory").WinButton("Ordner auswählen").Click	
		End If		
	End If
JavaWindow("Eclipse Launcher").JavaButton("Launch").Click
else

RunAction "Change Setting to Display Launcher", oneIteration


End If


