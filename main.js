var Resolver = require('y-resolver'),
    getter = Resolver.Yielded.getter,

    yielded = Symbol();

function toYd(){
  return this[yielded];
}

module.exports = function(cb){
  var resolver = new Resolver(),
      ret;

  if(cb) ret = function(){
    try{ resolver.accept(cb.apply(this,arguments)); }
    catch(e){ resolver.reject(e); }
  };
  else ret = function(){
    resolver.accept(arguments);
  };

  ret[yielded] = resolver.yielded;
  ret[getter] = toYd;

  return ret;
};
