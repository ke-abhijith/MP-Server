const jsonServer = require('json-server')
const MPServer = jsonServer.create()
const middleWare =jsonServer.defaults()
const router= jsonServer.router('db.json')
const PORT = 3000 || process.env.PORT

MPServer.use(middleWare)
MPServer.use(router)

MPServer.listen(PORT,()=>{
    console.log(`Media Player Server started at port ${PORT}`);
})