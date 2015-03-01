var toYielded = require('y-walk').toYielded,
    Resolver = require('y-resolver'),
    Su = require('u-su'),
    
    yielded = Su();

function toYd(){
  return this[yielded];
}

module.exports = function(){
  var resolver = new Resolver(),
      ret;
  
  ret = [
          function ok(data){
            resolver.accept(data);
          },
          function nok(error){
            resolver.reject(error);
          }
        ];
  
  ret[yielded] = resolver.yielded;
  ret[toYielded] = toYd;
  
  return ret;
};

