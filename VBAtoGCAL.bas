Attribute VB_Name = "VBAtoGCAL"
'※参照設定を設定して下さい
'Microsoft XML, v6.0
'Microsoft Excel Object Library

'動作確認:Excel,OUTLOOK
Sub sample()
    Dim summary
    Dim EventDate
    Dim description
    
    summary = "予定のタイトル"
    EventDate = Format(Date, "yyyy-mm-dd")
    description = "予定の説明"
    
    Call CreateGoogleCalendarEvent(summary, EventDate, description)
    
End Sub

'動作確認:Outlook
'Outlookで選択しているメールの件名を取得して今日の日付で予定を作成
'Outlook以外で実行する場合削除してください。
Sub OutlookSample()
    
    Dim originalMail As MailItem
    Dim summary As String
    Dim EventDate As String
    Dim Description As String
    
    ' 選択したメール取得
    Set originalMail = Outlook.Application.ActiveExplorer.Selection(1)
    summary = originalMail.Subject
    EventDate = Format(Date, "yyyy-mm-dd")
    Description = originalMail.Subject
    
    Call CreateGoogleCalendarEvent(summary, EventDate, Description)
    
    Set originalMail = Nothing
    
End Sub


Function CreateGoogleCalendarEvent(summary, EventDate, description)
    Dim scriptUrl As String
    'GASをデプロイしたwebアプリのURLを記入
    scriptUrl = "https://script.google.com/macros/s/************************/exec"
    
    Dim xlApp As New Excel.Application
    
    ' 引数の値を設定
    summary = xlApp.WorksheetFunction.EncodeURL(summary)
    EventDate = xlApp.WorksheetFunction.EncodeURL(EventDate)
    description = xlApp.WorksheetFunction.EncodeURL(description)
    
    Dim http As Object
    Set http = CreateObject("MSXML2.XMLHTTP")
    
    ' URLに引数を追加
    scriptUrl = scriptUrl & "?summary=" & summary & "&date=" & EventDate & "&description=" & description
    Debug.Print scriptUrl
    http.Open "GET", scriptUrl, False
    http.Send
    
End Function

