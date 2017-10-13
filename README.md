This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

```javascript
module.exports = function isPromise (val) {
  return (
    val &&
    val.then &&
    val.then instanceof Function &&
    val.constructor &&
    val.constructor.reject &&
    val.constructor.reject instanceof Function &&
    val.constructor.resolve &&
    val.constructor.resolve instanceof Function
  )
}
```
