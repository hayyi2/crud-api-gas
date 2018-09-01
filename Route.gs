var Route = {
  post: function(){
    var post_model = new Model("Post", "post_id");
    return {
      gets: function(e){
          return show_json(post_model.gets());
        },
      get: function(e){
          if (typeof(e.parameter.id) !== 'undefined') {
            return show_json(post_model.get(e.parameter.id));
          }else{
            return show_json("400");
          }
        },
      create: function(e){
          var field = post_model.field;
          var data = {};
          for(var i = 1; i < field.length; i++){
            if (field[i] in e.parameter) {
              data[field[i]] = e.parameter[field[i]];
            }else{
              return show_json("400");
            }
          }
          return show_json(post_model.create(data));
        },
      update: function(e){
          if (typeof(e.parameter.id) !== 'undefined') {
            if(post_model.get(e.parameter.id)){
              var field = post_model.field;
              var data = {};
              for(var i = 1; i < field.length; i++){
                if (field[i] in e.parameter) {
                  data[field[i]] = e.parameter[field[i]];
                }else{
                  return show_json("400");
                }
              }
              return show_json(post_model.update(e.parameter.id, data));
            }else{
              return show_json(false);
            }
          }else{
            return show_json("400");
          }
        },
      remove: function(e){
          if (typeof(e.parameter.id) !== 'undefined') {
            return show_json(post_model.remove(e.parameter.id));
          }else{
            return show_json("400");
          }
        },
     }
  }
}
