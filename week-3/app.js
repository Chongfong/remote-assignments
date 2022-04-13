const express = require('express');

const app = express();  //create an express application

app.use(express.static('public'));


// use pug ase view engline
app.set('view engine','pug');

//create a route (location,(callback fun))
app.get('/',(req,res)=>{
  return res.render('index');
})

app.get('/getData',(req,res)=>{
  const querynum = Number(req.query.number);
  if (Object.keys(req.query).length === 0){
    res.send('<h1>Lack of Parameter</h1>');
  }else if (Number.isInteger(querynum)===true && Number(req.query.number)>0) {
    res.send(`${(querynum*(querynum+1))/2}`);
  }else{
    res.send('<h1>Wrong Parameter</h1>');
  };
})

//setup the developing server 
app.listen(3000,()=>{
  console.log('application is running !')  
});

