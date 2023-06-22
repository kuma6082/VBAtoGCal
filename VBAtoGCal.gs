function createEvent(summary, date,description) {
  var calendarId = 'primary';
  var event = {
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
  
  var createdEvent = Calendar.Events.insert(event, calendarId);
  return createdEvent;
}

function doGet(e) {
  var summary = e.parameter.summary;
  var date = e.parameter.date;
  var description = e.parameter.description;
  
  var createdEvent = createEvent(summary, date ,description);
  
  // return ContentService.createTextOutput('予定が作成されました。ID: ' + createdEvent.id);
}

function test() {
  createEvent("予定のタイトル", "2023-06-20", "2023-06-20")
}
