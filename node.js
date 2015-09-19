var Resolver = require('y-resolver'),
    getter = Resolver.Yielded.getter,

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
  ret[getter] = toYd;

  return ret;
};
