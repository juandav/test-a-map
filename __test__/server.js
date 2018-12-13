const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

router.db._.mixin({
  getById(collection, id) {
    const idProp = this.__id();
    if (Array.isArray(id)) {
      const ids = id.map(_id => _id.toString());
      return this.filter(collection, doc => {
        if (this.has(doc, idProp)) {
          return ids.includes(doc[idProp].toString());
        }
      });
    }
    return this.find(collection, doc => {
      if (this.has(doc, idProp)) {
        return doc[idProp].toString() === id.toString();
      }
    })
  }
})

server.use(middlewares)
server.use(router)
server.listen(4000, () => {
  console.log('JSON Server is running')
})

// example http://localhost:4000/populations/100?_expand=country many to many