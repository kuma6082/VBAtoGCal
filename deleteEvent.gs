function deleteEvent(eventID) {
  const calendarId = 'omvinjcav1mjhumuja2hd6ifb8@group.calendar.google.com';
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

function deleteEvents() {
  const eventIDs = [
    'u0l7ro87cpa7d8s02minkbq94k',
    'n9cu3p6jug3l3hm4j3a8l696ks',
    'jl5h3io2ostfkneh1du8aj57tc',
    'ogf0o5m9p4ollcsb0nriq18f70',
    'sclet1adgebbc7okaj3pinsmnc',
    'i4q22l6aqvfnq9l01n7lcv0hvc',
    'mi3o2j7pf0c34lrscihufol0ac',
    'f78dvo64f7r410ucntektt56o4',
    'nm3nvdm2t76fm2v1mrqbv28hck',
    'u0sctjq4p624dckl71tidq8fak',
    'pgs1g68lmbitiqbivj7tqc60fg',
    'dlq7enj7e3dfkjt761jms21278',
    'c979n4bmknf3hhd8jmt5g75fb0',
    'i07abst1vol4tre5rj829r2chs',
    '0rqp0njte0p26ee1eg7d4eapl0',
    'vsmr20o3bqqrauibqlghnsrd84',
    'ht58perhqhip2i81qr4ah1ftgo',
    'jm3arnpal51phoee5o2i5da2o8',
    'l5nq0simmem6cik3sroosjo1lc',
    'gl1c39o7a4q8crlesudah1samk',
    'hfsldbtjkjskp9sh78v21kfn6s',
    'g5ggomh5acpl6eec492kmjh06c',
    'k75lsuq36ncvqgd4h24a7mjnik'
  ];

  for (const eventID of eventIDs) {
    deleteEvent(eventID);
  }
}
