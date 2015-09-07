var Resolver = require('y-resolver'),

    yielded = Symbol();

function toYd(){
  return this[yielded];
}

module.exports = function(){
  var resolver = new Resolver();

  function ret(error,result){
    if(error) resolver.reject(error);
    else resolver.accept(result);
  }

  ret[yielded] = resolver.yielded;
  ret[Resolver.toYielded] = toYd;

  return ret;
};
