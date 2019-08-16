var request = require('request');
const express = require('express');
const app = express()
const port = 3000;
app.set("view engine", "ejs");

function intervalTime(){

app.get("/", function(req, res){
  request('http://mdmonirul:Manir1122!@localhost:9090/monitoring?format=json&part=jvm', function(error, response, body){
    if(error){
      console.log("ereor");
      console.log(error);
    } else {
      if(response.statusCode == 200){
        var parseData = JSON.parse(body);
        res.render("results", {parseData: parseData});
        //res.send(`Used Memory${parseData['list'][0]['memoryInformations'].usedMemory}`);
      }
    }

  });

});

}

setInterval(intervalTime, 1500);

app.listen(port, () => console.log(`App listening on port ${port}!`))
