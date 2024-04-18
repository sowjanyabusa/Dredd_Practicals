
const express= require("express");
const cors = require("cors");
const app = express();
const PORT=process.env.PORT || 3000;

app.use(cors());
app.options("*",(req,res,next)=>
{
    res.header('Access-Control-Allow-Origin',"*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,OPTIONS');
    res.header('Access-Control-Allow-Headers','Authorization, Content-Length, X-Requested-With');
    res.send(200);
});
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use((req,res, next) =>
    {
       // console.log($(req.method), $(req.path) , $(req.ip) );
        next();
    });
    app.use(express.static('public'));
    app.use(express.static('css'));

  //  const timeRoutes = require ("./routes/time");
    
   /* app.get ('/', (req,res) => 
    {
        res.sendFile(__dirname + "/views/index.html");
    }); */

   /* app.get ('/:id', (req,res)=> 
    {
        const id = req.params.id;
        res.send ('<h1> ' + id + '</h1>');

    }); */

    app.post('/login', function(req, res) {
        const username = req.body.username;
        const password = req.body.password;
        
        res.json({authenticated:true});
    });

    app.get('/message', function(req, res) {
        res.json({message:'Hello World'}); //message: 'Hello World!'
      });

    app.get ('/form', (req,res) => 
    {
        res.sendFile(__dirname + "/views/form.html");
    });
    app.get ('/:word/echo', (req,res) => {
        res.json({"echo": req.params.word })

    });
    app.all('*',(req,res)=>{
        res.send("Invalid route");
    })


app.listen(PORT, ()=> console.log('listening on ${PORT}'));
