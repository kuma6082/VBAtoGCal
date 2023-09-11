function createEvent(summary, date, description ,gcalID) {
  const calendarId = gcalID;
  const event = {
    'summary': summary,
    'description': description,
    'start': {
      'date': date,
    },
    'end': {
      'date': date,
    },
    'transparency': 'transparent',
  };

  Logger.log('summary: ' + summary);
  Logger.log('date: ' + date);
  Logger.log('description: ' + description);
  Logger.log('gcalID: ' + gcalID);
  
  const createdEvent = Calendar.Events.insert(event, calendarId);
  return createdEvent;
}

function doGet(e) {
  const summary = e.parameter.summary;
  const date = e.parameter.date;
  const description = e.parameter.description;
  const gcalID = e.parameter.gcalID;
  const createdEvent = createEvent(summary, date ,description ,gcalID);
  
  return HtmlService.createHtmlOutput('<h1>予定が作成されました。ID:【' + createdEvent.id + '】<h1>')
  // return ContentService.createTextOutput('予定が作成されました。ID: ' + createdEvent.id);
}

function test() {
  createEvent("テスト予定のタイトル", "2023-09-11", "2023-09-11","primary")
}