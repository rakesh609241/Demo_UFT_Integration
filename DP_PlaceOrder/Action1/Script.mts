Option Explicit

Dim strScriptLocation, strDirPath
strScriptLocation = PathFinder.Locate(".")


Environment.Value("ENV_LOCATION") = PathFinder.Locate("..\..\")
'C:\DP_Automation\

LoadFunctionLibrary Environment.Value("ENV_LOCATION")&"Function Libraries\GLOBAL_FUNCTIONS.qfl"

boolEndscriptCalled = False

Call StartScript_FN()
'''Core user
Call addBpNode("this is an demo node")

ReportEventWithImage_FN "PASS","this is an test line","Test Statement in PDF File",true
'LoadAndRunAction "[ALM] Subject\DigitalPortal_Automation\Reusable Actions\BPC_Login","BPC_Login", oneIteration,"AMERICA","WEBUSER"

boolEndscriptCalled = True

'Call EndScript_FN()
