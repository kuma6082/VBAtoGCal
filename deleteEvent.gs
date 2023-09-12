function deleteEvent(eventID,gcalID) {
  const calendarId = gcalID;
  const calendar = CalendarApp.getCalendarById(calendarId);
  const event = calendar.getEventById(eventID);

  if (event) {
    event.deleteEvent();
    console.log("イベントが削除されました。");
  } else {
    console.log("指定されたイベントIDが見つかりませんでした。");
  }
  
  console.log('eventID: ' + eventID);
}

function test_deleteEvents() {
  const eventIDs = [
    '******************'
  ];

  for (const eventID of eventIDs) {
    deleteEvent(eventID);
  }
}
