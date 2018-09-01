function log(log_data) {
  Logger.log(log_data);
}

function show_json(content){
  return ContentService
    .createTextOutput(JSON.stringify(content))
    .setMimeType(ContentService.MimeType.JSON);
}

function json_404(){
  return show_json("404");
}
