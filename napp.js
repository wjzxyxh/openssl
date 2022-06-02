const http = require('http')
const homePage = '测试成功。。。。'

http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'})
res.end(homePage)
}).listen(80)

console.log('server running on http://local')