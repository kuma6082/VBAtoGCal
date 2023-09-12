function changeEvent(eventID, summary, date, description,gcalID) {
  const calendarId = gcalID;
  const calendar = CalendarApp.getCalendarById(calendarId);
  const event = calendar.getEventById(eventID);

  if (event) {
      // イベントの変更
      if (summary !== ""){
        event.setTitle(summary); 
        console.log('summary:通過'); 
      }else{
        ;
      } 

      // if (description !== null || description !== ""){
      if (description !== ""){
        event.setDescription(description);
        console.log('description: 通過');
      }else{
        ;
      }

      if (date !== ""){
        event.setAllDayDate(new Date(date));
        console.log('date: 通過');
      }else{
        ;
      }
      // その他の変更が必要なプロパティがあれば、追加してください。
      // event.setGuests(updatedEvent.guests); // ゲストリストの変更
      // event.setColor(updatedEvent.color); // イベントの色の変更
      
      console.log( "イベントが更新されました。");
    } else {
      console.log("指定されたイベントIDが見つかりませんでした。");
    }

  console.log('eventID: ' + eventID);
  console.log('summary: ' + summary);
  console.log('date: ' + date);
  console.log('description: ' + description);
  console.log('gcalID: ' + gcalID);
  // const createdEvent = Calendar.Events.insert(event, calendarId);
  // return createdEvent;
}

function test() {
  changeEvent("******************","件名", "日付(2023-00-00)","備考","primary")
}