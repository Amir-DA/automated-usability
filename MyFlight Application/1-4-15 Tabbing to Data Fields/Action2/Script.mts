' (c) 2018 - Amir Banaouas - Solution Practical Part of Thesis
' This code segment is licensed under GNU GPLv3  license (See ReadMe.txt for details)

'Presses the Tab key
WpfWindow("HPE MyFlight Sample Application").Type micTab

'Check if the agent name text field is focused
WpfWindow("HPE MyFlight Sample Application").WpfEdit("agentName").Check CheckPoint("AgentName Field has Cursor Focus")
WpfWindow("HPE MyFlight Sample Application").WpfEdit("agentName").Set "john"

WpfWindow("HPE MyFlight Sample Application").Type micTab @@ hightlight id_;_985196_;_script infofile_;_ZIP::ssf2.xml_;_
'Check if the password text field is focused
WpfWindow("HPE MyFlight Sample Application").WpfEdit("password").Check CheckPoint("Password Field has Cursor Focus") @@ hightlight id_;_1972990416_;_script infofile_;_ZIP::ssf21.xml_;_
WpfWindow("HPE MyFlight Sample Application").WpfEdit("password").SetSecure "5b51f6f18e41810734bb"

WpfWindow("HPE MyFlight Sample Application").Type micTab
'Check if the button is now focused
WpfWindow("HPE MyFlight Sample Application").WpfButton("OK").Check CheckPoint("OK Button has Cursor Focus")
WpfWindow("HPE MyFlight Sample Application").Type  micReturn @@ hightlight id_;_985196_;_script infofile_;_ZIP::ssf14.xml_;_
