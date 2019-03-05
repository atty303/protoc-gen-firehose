const protobuf = require('protobufjs')

protobuf.load('1.proto', (err, root) => {
  if (err) throw err

  const Test = root.lookupType('test.Test')

  const payload = { a: 123, b: 'foo', inner: { foo : 'bar' } }
  const msg = Test.create(payload)
  console.log(msg.inner.foo)
})
