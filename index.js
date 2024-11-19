
var express = require('express'); 
var app     = express();            
PORT        = 3000;                 
const { engine } = require('express-handlebars');
var exphbs = require('express-handlebars');
app.engine('.hbs', engine({extname: ".hbs"}));
app.set('view engine', '.hbs');  
app.use(express.static('public'));


app.get('/', function(req, res)                
    {
        res.render('index')    
    }); 
    

app.listen(PORT, () => {          
    console.log('Express started on http://localhost:' + PORT)
});