function Model(sheet_name){
  this.sheet = sheet.getSheetByName(sheet_name);
  this.field = this.sheet.getRange(1, 1, 1, this.sheet.getLastColumn()).getValues()[0];

  this.genObject = function(data){
    var return_data = [];
    for(var i = 0; i < data.length; i++){
      var record = {};
      for(var j = 0; j < this.field.length; j++){
        record[this.field[j]] = data[i][j];
      }
      return_data[i] = record;
    }
    return return_data;
  }
  this.gets = function(){
    var data = this.sheet.getRange(2, 1, this.sheet.getLastRow() - 1, this.sheet.getLastColumn()).getValues();
    return this.genObject(data);
  }

}
