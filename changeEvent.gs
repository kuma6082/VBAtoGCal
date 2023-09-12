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
        // var date = event.getStartTime();
        // var date = new Date(eventStartTime);
        // var date = Utilities.formatDate(eventStartTime, "JST", "yyyy-MM-dd HH:mm:ss");
        // event.setAllDayDate(new Date(date));
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
  // const calendarId = "primary";
  // const calendar = CalendarApp.getCalendarById(calendarId);
  // const event = calendar.getEventById("0tabo852hv9856u123h4guo0j4");
  // var eventStartTime = event.getStartTime();
  // var eventStartTime = new Date(eventStartTime);
  // var formattedDate = Utilities.formatDate(eventStartTime, "JST", "yyyy-MM-dd HH:mm:ss");
  // console.log(event.getTitle());
  // console.log(event.getDescription());
  // console.log(formattedDate);
  changeEvent("j0vokmic1qagnq2685mqpv51p8","", "","","primary")
}