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
          return show_json("Create Post");
        },
      update: function(e){
          return show_json("Update Post");
        },
      remove: function(e){
          return show_json("Remove Post");
        },
     }
  }
}
