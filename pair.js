var Resolver = require('y-resolver'),
    getter = Resolver.Yielded.getter,

    yielded = Symbol();

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
  ret[getter] = toYd;

  return ret;
};
