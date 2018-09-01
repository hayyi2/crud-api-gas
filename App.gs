var App = {
  run: function(e){
    if("group" in e.parameter && "fun" in e.parameter){
      if(e.parameter.group in Route === false){
        return json_404();
      }else if(e.parameter.fun in Route[e.parameter.group]() === false){
        return json_404();
      }else{
        var group = Route[e.parameter.group]();
        return group[e.parameter.fun](e);
      }
    }else{
      return json_404();
    }
  }
}
