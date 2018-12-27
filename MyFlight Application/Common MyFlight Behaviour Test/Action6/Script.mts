' (c) 2018 - Amir Banaouas - Solution Practical Part of Thesis
' This code segment is licensed under GNU GPLv3  license (See ReadMe.txt for details)

version = Environment.Value("ProductVer")

If version = "14.03" Then
SystemUtil.CloseProcessByWndTitle "HPE MyFlight Sample Application"	
ElseIf version = "14.50" Then
SystemUtil.CloseProcessByWndTitle "Micro Focus MyFlight Sample Application"	
else
SystemUtil.CloseDescendentProcesses
End If


'Wait 1 second to give time for the process to close and not cause an EO Runtime Exception when looping
wait(1)
