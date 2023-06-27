function createEvent(summary, date,description) {
  const calendarId = 'primary';
  const event = {
    'summary': summary,’予定のタイトル
    'start': {
      'date': date,
    },
    'end': {
      'date': date,
    },
    'transparency': 'transparent',
    'description': description’予定の説明
  };
  
  const createdEvent = Calendar.Events.insert(event, calendarId);
  return createdEvent;
}

function doGet(e) {
  const summary = e.parameter.summary;
  const date = e.parameter.date;
  const description = e.parameter.description;
  
  const createdEvent = createEvent(summary, date ,description);
  
  // return ContentService.createTextOutput('予定が作成されました。ID: ' + createdEvent.id);
}

function test() {
  createEvent("予定のタイトル", "2023-06-20", "2023-06-20")
}
