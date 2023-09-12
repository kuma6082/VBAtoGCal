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
  Logger.log('Eventid: ' + createdEvent.id);
  return createdEvent;
}

function test() {
  createEvent("テスト予定のタイトル", "2023-09-11", "2023-09-11","primary")
}