const app = require('express')();
const { json, urlencoded } = require('body-parser');
const cors = require('cors');
const PORT = 3000;

app.use(json());
app.use(cors());
app.use(urlencoded({ extended: true }));

app.get('/requests', (req, res, next) => {
    //Mimic fetching the right connection
    const currentPerson = currentUsers.find(curr => curr.userID === 1)
    //If connection exists right to the client that people are checking on them 
    //Else do nothing.
    if(currentPerson) {
        currentPerson.response.write(`data: People are checking in on you!!\n\n`);
        res.status(200).send('You hit the right end point')
    } else {
        console.log('sending error')
        res.status(500).send('You dont get in!!!!')
    }
}) 
 
const currentUsers = [];

app.get('/event-stream', (req, res) => {
    const { userID } = req.query;

    //This header beings our server stream
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
    });
    res.write('\n');

    //create a connection object to be accessed later when the client needs to be updated
    const currentConnection = {
        userID: Number(userID),
        response: res
    }
    //make sure the client doesn't already exist in our array
    if(!currentUsers.find(curr => curr.userID === currentConnection.userID)) {
        currentUsers.push(currentConnection)
    }

    if(currentUsers.length > 0 ) {
        console.log(`Connection sucesffuly made with ${currentUsers.length} connections`)
    }

    //TODO: Still working on understanding this.
    res.flushHeaders()

    //TODO: Need to create a heartbeat method to manage keeping connections alive

    //TODO: Need to manage removing closed connections

});







app.listen(PORT, () => {
    console.log("Yo, I'm listening in the year 3000")
})

module.exports = app;  