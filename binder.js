const binderExcludes = {
  'constructor':true,
  'render':true,
  'componentWillMount':true,
  'componentDidMount':true,
  'componentWillReceiveProps':true,
  'shouldComponentUpdate':true,
  'componentWillUpdate':true,
  'componentDidUpdate':true,
  'componentWillUnmount':true
}

function binder(that, exp=/.*/, excludes=binderExcludes){
  let bound = []
  for (let name of Object.getOwnPropertyNames(Object.getPrototypeOf(that))) {
    let f = that[name]
    if(typeof f === 'function' && !excludes[name] &&  exp.test(name)){
      that[name] = f.bind(that)
      bound.push(name)
    }
  }
  return bound
}

module.exports = binder
