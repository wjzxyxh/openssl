const http = require('http')
//ctrl + c :停止cmd运行程序
const homePage = '<!DOCTYPE html>\n' +
    '<html lang="en">\n' +
    '<head>\n' +
    '    <meta charset="UTF-8">\n' +
    '<!--    title为窗口名称-->\n' +
    '    <title>Title</title>\n' +
    '</head>\n' +
    '<body>\n' +
    '    <h1  align="center"><u>这是测试网站</u></h1>\n' +
    '\n' +
    '\n' +
    '\n' +
    '</body>\n' +
    '</html>'

var server = http.createServer((req,res) => {
    res.statusCode = 200
    res.setHeader('Conntent-Type','text/ht' +
        'ml')
    res.end(homePage)
})

server.listen(3000,() => {
    console.log('server running at 3000')
})
