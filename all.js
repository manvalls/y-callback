var Resolver = require('y-resolver'),
    getter = Resolver.Yielded.getter,

    rs = Symbol(),
    yds = Symbol();

function toYd(){
  var arr;

  if((arr = this[yds]).length){
    this[yds] = [];
    return Resolver.all(arr);
  }

  this[rs] = this[rs] || new Resolver();
  return this[rs].yielded;
}

module.exports = function(cb){
  var ret;

  if(cb) ret = function(){
    var yd,r;

    try{ yd = Resolver.accept(cb.apply(this,arguments)); }
    catch(e){ yd = Resolver.reject(e); }

    if(r = ret[rs]){
      delete ret[rs];
      r.bind(yd);
    }else ret[yds].push(yd);

  };
  else ret = function(){
    var yd = Resolver.accept(arguments),
        r;

    if(r = ret[rs]){
      delete ret[rs];
      r.bind(yd);
    }else ret[yds].push(yd);

  };

  ret[yds] = [];
  ret[getter] = toYd;

  return ret;
};
