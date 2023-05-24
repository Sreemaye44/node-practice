const http= require('http');
const data=require('./data');
const fs=require('fs');

const input = process.argv; 

function test(a){
    return a*10;
}

http.createServer((req, res)=>{
      res.writeHead(200, {'Content-Type': 'application\json'});
      res.write(JSON.stringify(data));
      res.end();
}).listen(4500 )

//console.log(process.argv[2]);


if(input[2]=='add'){
fs.writeFileSync(input[3], input[4])
}
else if(input[2]=='remove'){
    fs.unlinkSync(input[3])
}
else{
    console.log("invalid intput")
}
