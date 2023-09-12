function doGet(e) {
  const summary = e.parameter.summary;
  const date = e.parameter.date;
  const description = e.parameter.description;
  const gcalID = e.parameter.gcalID;
  const determine = e.parameter.determine;

  if (determine === "setDeadline"){
    const createdEvent = createEvent(summary, date ,description ,gcalID); 
    return HtmlService.createHtmlOutput('<h1>予定が作成されました。ID:【' + createdEvent.id + '】<h1>') 
  } else if(determine === "setChange"){
    changeEvent(eventID ,summary, date ,description,gcalID);
  }
}