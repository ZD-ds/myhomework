const Koa = require('koa');
const Router=require("koa-router");
const serve = require('koa-static');
const app = new Koa();
const router = new Router();
const fs=require("fs");
const path = require('path');
const extname = path.extname;
const http=require("http");
//这是swig组件的使用
var render = require('koa-swig');
const co = require('co');

app.context.render = co.wrap(render({
  root: path.join(__dirname, 'static'),
  ext: 'html',
  
}));



function stat(file) {
    return new Promise(function(resolve, reject) {
      fs.stat(file, function(err, stat) {
        if (err) {
          reject(err);
        } else {
          resolve(stat);
        }
      });
    });
  }
  //这里设置静态资源

//这是主页资源
router.get("/index/index",async (ctx)=>{
    const fpath = path.join(__dirname,"/views/index.html");
  
    const fstat =await  stat(fpath);
    if (fstat.isFile()) {
        ctx.type = extname(fpath);
        ctx.body = fs.createReadStream(fpath);
    }
   
});
router.get("/index/index.js",async (ctx)=>{
    const fpath = path.join(__dirname,"/static/index-ba744.js");
  
    const fstat =await  stat(fpath);
    if (fstat.isFile()) {
        ctx.type = extname(fpath);
        ctx.body = fs.createReadStream(fpath);
    }
});
router.get("/index/add.js",async (ctx)=>{
    const fpath = path.join(__dirname,"/public/add.js");
  
    const fstat =await  stat(fpath);
    if (fstat.isFile()) {
        ctx.type = extname(fpath);
        ctx.body = fs.createReadStream(fpath);
    }
});
router.get("/index/PraiseButton",async (ctx)=>{
    const fpath = path.join(__dirname,"/public/PraiseButton.js");
  
    const fstat =await  stat(fpath);
    if (fstat.isFile()) {
        ctx.type = extname(fpath);
        ctx.body = fs.createReadStream(fpath);
    }
});
router.get("/index/x-praise.js",async (ctx)=>{
  const fpath = path.join(__dirname,"/static/xtag-cd667.js");
  const fstat =await  stat(fpath);
  if (fstat.isFile()) {
      ctx.type = extname(fpath);
      ctx.body = fs.createReadStream(fpath);
  }
});
let times=0;
//这是java返回的数据
router.get("/index/initdata", async (ctx)=>{
     times=await new Promise(function(resolve,reject){
        const options = {
            hostname: 'localhost',
            port: 8080,
            path: '/Praiseback/initThumb',
            method: 'GET',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            }
          };
          const req = http.request(options, (res) => {
      
            console.log(`STATUS: ${res.statusCode}`);
            console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
            res.setEncoding('utf8');
            
            res.on('data', (chunk) => {
              times= chunk;
              console.log(times);
              resolve(times);
            });
            
            res.on('end', () => {
                console.log("数据成功接受");
            });
           
          });
          req.on('error', (e) => {
            reject(e.message);
            console.error(`problem with request: ${e.message}`);
          });
          
          // write data to request body
         
          req.end();
     });
     ctx.body=times;
});

router.get("/index/add", async(ctx)=>{
    times=await new Promise(function(resolve,reject){
        const options = {
            hostname: 'localhost',
            port: 8080,
            path: '/Praiseback/Thumbsup',
            method: 'GET',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            }
          };
          const req = http.request(options, (res) => {
     
            console.log(`STATUS: ${res.statusCode}`);
            console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
            res.setEncoding('utf8');
            
            res.on('data', (chunk) => {
              times= chunk;
              console.log(times);
             resolve(times);
            });
            
            res.on('end', () => {
                console.log("数据2成功接受");
                
            });
          
          });
          req.on('error', (e) => {
            reject(e.message);
            console.error(`problem with request: ${e.message}`);
          });
          
          // write data to request body
          req.end();
    });
    ctx.body=times;
});  

 app.use(serve(__dirname + '/static'));
 //出现bug,swig不知道为什么渲染后还是css,js都变成请求页面了
// app.use(async ctx => ctx.body = await ctx.render('index', {
//   user: {
//     title: 'aaaa'
//   }
// }));
  app
    .use(router.routes())
    .use(router.allowedMethods());

module.exports=app.listen(3000);

