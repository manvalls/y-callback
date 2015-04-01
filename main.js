var Resolver = require('y-resolver'),
    Su = require('u-su'),
    
    yielded = Su();

function toYd(){
  return this[yielded];
}

module.exports = function(){
  var resolver = new Resolver();
  
  function ret(){
    resolver.accept(arguments);
  }
  
  ret[yielded] = resolver.yielded;
  ret[Resolver.toYielded] = toYd;
  
  return ret;
};

