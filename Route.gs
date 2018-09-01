var Route = {
  post: function(){
    return {
      gets: function(e){
          return show_json("Gets Post");
        },
      get: function(e){
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
