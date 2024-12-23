//Creating a HTTP server
//express
//node default library => no

const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

  


// req = response, res = response
//Methods
//GET - request to get something 
//POST - request to post something(new)
//PUT - request to put something like replacing things
//DELETE - request to delete something
var users = [{
    name: "Rahul Saini",
    kidneys: [
        {healthy: false
        }]
}];
app.use(express.json());
app.get('/', function(req, res){
    
    
    //patient name
    const userName = users[0].name;
    

   //Write logic of returning kidneys health.
   const usersKidneys = users[0].kidneys;
   

    const noOfKidneys = usersKidneys.length;
    let noOfHealthyKidneys = 0;

    for ( let i = 0; i< usersKidneys.length; i++){
        if ( usersKidneys[i].healthy ){
            noOfHealthyKidneys += 1;
        }
    };
   res.json({
    userName,
    usersKidneys,
    noOfKidneys,
    noOfHealthyKidneys

   })

  
});

//posting a kideney
 app.post('/', function(req, res){
    //usually in POST method, it goes to body
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })

    res.json({
        msg: "Done"
    })
    
   })


   //putting a kidney

app.put('/', function (req, res){
    for ( let i = 0; i < users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    };

    res.json({})

})
//removing a kidney

app.delete('/', function (req, res){
    //only if atleast one unhealthy kidney is there ,do this, else return 411
    if (isThereAtLeastOneUnhealthyKidney()){
        
    const newKidneys = [];
    for ( let i = 0; i < users[0].kidneys.length; i++){

        if ( users[0].kidneys[i].healthy ) {
            newKidneys.push({
                healthy: true
            })

        }
    };
     users[0].kidneys = newKidneys;

    res.json({
        msg: "Done"
    })
    }
    else {
        res.sendStatus(411).json({
            msg: "You have no bad kidneys"
        });
        }


})
function isThereAtLeastOneUnhealthyKidney (){
    let atLeastOneUnhealthyKidney = false;
for ( let i = 0; i < users[0].kidneys.length; i++){

        if ( !users[0].kidneys[i].healthy ) {
           atLeastOneUnhealthyKidney = true;

        }
    }
    return atLeastOneUnhealthyKidney;
}





app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

