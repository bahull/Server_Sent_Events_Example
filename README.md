### This repository is still a work in progress and should not be used as a tutorial at this time

# Server Side Events
* The point of this repo is to give a simple demonstration of utilizing Service Sent Events using the html 5 implementation of EventSource

# Use
* Download this project locally
* After you have donwloaded the project and navigated in to the root of the directory run ```npm install``` in your terminal to download the required dependencies
* From the root of the directory  run the following in your terminal ```npm run dev```
* Start the React front end by running ```npm run start``` in your terminal
* Open the front end at [http://localhost:3001](http://localhost:3001)
* In your Node terminal you shouold see a log that a connection was successfully made
* In your browser console you should see that a connection was opened
* If you click the ```See if someone is looking!``` button on the bottom of the page the server will look for an active connection matching a hardcoded id that you passed to the server on connection and will then send a response to your client. 

* This example replicates a client subscribing to the server and the server then recieving a request from an outside source and notifying the correct subscribed client.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the React application in the development mode.<br />
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.<br />
### `npm run dev`

Launches a node instance running on port:3000 or as I like to say 
🎶We live in the year 3000 🎶

