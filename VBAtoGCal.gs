function createEvent(summary, date) {
  var calendarId = 'primary';
  var event = {
    'summary': summary,
    'start': {
      'date': date,
    },
    'end': {
      'date': date,
    },
    'transparency': 'transparent'
  };
  
  var createdEvent = Calendar.Events.insert(event, calendarId);
  return createdEvent;
}

function doGet(e) {
  var summary = e.parameter.summary;
  var date = e.parameter.date;
  
  var createdEvent = createEvent(summary, date);
  
  // return ContentService.createTextOutput('予定が作成されました。ID: ' + createdEvent.id);
}

// function test() {
//   createEvent("予定のタイトル", "2023-06-20", "2023-06-20")
// }
