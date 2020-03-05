const SSEStreamManager = require('./sseStreamManager')

class SSEConnectionManager {
    constructor() {
        this.managedConnections = [];
    }

    addConnection(connection, id) {
        const existingConnection = this.managedConnections.find(item => item.id === id);
        if(!existingConnection) {
            console.log('Added a new connection');
            let currentConnection = new SSEStreamManager(connection, id, this.removeConnection.bind(this));
            this.managedConnections.push(currentConnection);
        } else {
            console.log('Connection not added due to already existing')
        }
    }
    
    removeConnection(id) {
        const connectionIndex = this.managedConnections.findIndex(item => item.id == id);
        if(connectionIndex >= 0) {
            console.log('this.managedConnections[connectionIndex].connection: ', this.managedConnections[connectionIndex].connection);
            console.log('Removing connection', this.managedConnections);
            this.managedConnections[connectionIndex].killHeartbeat()
            this.managedConnections[connectionIndex].connection.destroy();
            this.managedConnections.splice(connectionIndex, 1);
            console.log('Connection removed', this.managedConnections);
        } else {
            console.log(`No connection matching id: ${id}`)
        }
    }

    getConnection(id) {
        const connectionIndex = this.managedConnections.findIndex(item => item.id == id);
        if(connectionIndex >= 0) {
            return this.managedConnections[connectionIndex];
        } else {
            console.log(`No connection matching id: ${id}`)
        }
    }


}

module.exports = SSEConnectionManager;