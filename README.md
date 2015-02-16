# Callback

## Sample usage

```javascript
var walk = require('y-walk'),
    Cb = require('y-callback');

walk(function*(){
  var cb;
  
  setTimeout(cb = Cb(),1000);
  yield cb;
  
  // one second later...
  console.log('boo');
});
```
