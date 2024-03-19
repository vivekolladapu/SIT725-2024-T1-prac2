const express = require('express');
const app = express();
const port = 3000;


// get method for substraction
app.get('/substraction', (req, res) => {
    var { A, B } = req.query;
    var A1=Number(A);
    var B1= Number(B);
    var c = A1-B1;

    // adding ifelse loop for valid parameters from the url
    if(A1 && B1){
        res.json({

            data : c,
            Message : "Success",
            statusCode : "400"
        });
    }
    else{
        res.json({

            data : c,
            Message : "Request Failed!",
            statusCode : "400"
        });
    }
});


// get method for addition
app.get('/addition', (req, res) => {
    var { A, B } = req.query;
    // type convertion
    var A1=Number(A);
    var B1= Number(B);
    var c = A1+B1;
    
    // adding ifelse loop for valid parameters from the url
    if(A1 && B1){
        res.json({

            data : c,
            Message : "Success",
            statusCode : "400"
        });
    }
    else{
        res.json({

            data : c,
            Message : "Request Failed!",
            statusCode : "400"
        });

    }
    
  });





// get method for Division
app.get('/division', (req, res) => {
    var { A, B } = req.query;
    var A1=Number(A);
    var B1= Number(B);
    var c = A1/B1;

    // adding ifelse loop for valid parameters from the url
  
    if(A1 && B1){
        res.json({

            data : c,
            Message : "Success",
            statusCode : "400"
        });
    }
    else{
        res.json({

            data : c,
            Message : "Request Failed!",
            statusCode : "400"
        });
    }
});


// get method for multiplication
app.get('/multiplication', (req, res) => {
    var { A, B } = req.query;
    var A1=Number(A);
    var B1= Number(B);
    var c = A1*B1;

    // adding ifelse loop for valid parameters from the url
   
    if(A1 && B1){
        res.json({

            data : c,
            Message : "Success",
            statusCode : "200"
        });
    }
    else{
        res.json({

            data : c,
            Message : "Request Failed!",
            statusCode : "200"
        });
    }
});


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
