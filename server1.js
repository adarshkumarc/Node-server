const http=require('http');
const fs=require('fs')
const server=http.createServer((req,res)=>{
    //res.statusCode('200');
    console.log('request sendig');
console.log(req.url,req.method);
// header content

res.setHeader('Content-type','text/html');
// send html file
fs.readFile('./views/index.html',(err,data)=>{
    if(err){
        console.log(err);
        res.end("<h1>not found</h1>");

    }else{
        res.end(data);
        
    }
})
//res.write('<head><link rel ="styleseet" href="#"></head>');
//res.write('hello india');

});
server.listen(3001,()=>{
    console.log('listening for request on port = "https://localhost3001"' );
})