var Route = {
  post: function(){
    var post_model = new Model("Post");
    return {
      gets: function(e){
          return show_json(post_model.gets());
        },
      get: function(e){
          if (typeof(e.parameter.id) !== 'undefined') {
          }
          return show_json("Get Post");
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
