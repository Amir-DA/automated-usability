' (c) 2018 - Amir Banaouas - Solution Practical Part of Thesis
' This code segment is licensed under GNU GPLv3  license (See ReadMe.txt for details)

JavaWindow("Eclipse").Close @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf1.xml_;_
'The following lines take some time to execute at runtime (from 5 to 8 seconds).
If JavaWindow("Eclipse").JavaWindow("Confirm Exit").Exist Then
JavaWindow("Eclipse").JavaWindow("Confirm Exit").JavaButton("Exit").Click
End If
