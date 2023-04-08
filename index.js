const express = require('express'); 
const app = express();              
const port = 5001;  
                


async function logJSONData() {
    
    const response = await fetch("https://api.themoviedb.org/3/movie/76341?api_key=d603f8d2da405d422c0b6dd441888e5c&language=de");
    const jsonData = await response.json();
    console.log(jsonData);
  }


  

app.get('/', (req, res) => { 
    
});
