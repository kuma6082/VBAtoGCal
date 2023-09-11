function createEvent(summary, date, description) {
  const calendarId = 'omvinjcav1mjhumuja2hd6ifb8@group.calendar.google.com';
  const event = {
    'summary': summary,
    'description': description,
    'start': {
      'date': date,
    },
    'end': {
      'date': date,
    },
    'transparency': 'transparent'
  };

  Logger.log('summary: ' + summary);
  Logger.log('date: ' + date);
  Logger.log('description: ' + description);
  
  const createdEvent = Calendar.Events.insert(event, calendarId);
  return createdEvent;
}

function doGet(e) {
  const summary = e.parameter.summary;
  const date = e.parameter.date;
  const description = e.parameter.description;
  
  const createdEvent = createEvent(summary, date ,description);
  
  return HtmlService.createHtmlOutput('<h1>予定が作成されました。ID:【' + createdEvent.id + '】<h1>')
  // return ContentService.createTextOutput('予定が作成されました。ID: ' + createdEvent.id);
}

function test() {
  createEvent("テスト予定のタイトル", "2023-08-21", "2023-08-21")
}