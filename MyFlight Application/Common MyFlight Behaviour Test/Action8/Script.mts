' (c) 2018 - Amir Banaouas - Solution Practical Part of Thesis
' This code segment is licensed under GNU GPLv3  license (See ReadMe.txt for details)

WpfWindow("HPE MyFlight Sample Application").WpfTabStrip("WpfTabStrip").Select "SEARCH ORDER"
WpfWindow("HPE MyFlight Sample Application").WpfEdit("byNameWatermark").Set DataTable("Customer_Name_Text", dtGlobalSheet)
WpfWindow("HPE MyFlight Sample Application").WpfButton("SEARCH").Click

