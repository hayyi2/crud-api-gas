function Model(sheet_name, primary_key){
  this.primary_key = primary_key;
  this.sheet = sheet.getSheetByName(sheet_name);
  this.field = this.sheet.getRange(1, 1, 1, this.sheet.getLastColumn()).getValues()[0];

  // Prepare Data
  var data = this.sheet.getRange(2, 1, this.sheet.getLastRow() - 1, this.sheet.getLastColumn()).getValues();
  var return_data = [];
  for(var i = 0; i < data.length; i++){
    var record = {};
    for(var j = 0; j < this.field.length; j++){
      record[this.field[j]] = data[i][j];
    }
    return_data[i] = record;
  }
  this.data = return_data;

  // CRUD Function
  // gets all data
  this.gets = function(){
    return this.data;
  }
  // get data by id
  this.get = function(id){
    var data = false;
    for(var i = 0; i < this.data.length; i++){
      if(this.data[i][this.primary_key] == id){
        data = this.data[i];
        break;
      }
    }
    return data;
  }
  this.create = function(data){
    var id = this.sheet.getRange(this.sheet.getLastRow(), 1).getValue();
    var new_data = [];
    var i = 0;
    new_data[i++] = id + 1;
    for(var j = 1; j < this.field.length; j++){
      new_data[i++] = data[this.field[j]];
    }
    this.sheet.appendRow(new_data);
    return new_data[0];
  }
  this.remove = function(id){
    var data_return = false;
    for(var i = 0; i < this.data.length; i++){
      if(this.data[i][this.primary_key] == id){
        this.sheet.deleteRow(i + 2);
        data_return = "204";
        break;
      }
    }
    return data_return;
  }
}
