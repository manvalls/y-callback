var Resolver = require('y-resolver'),

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
  ret[Resolver.toYielded] = toYd;

  return ret;
};
