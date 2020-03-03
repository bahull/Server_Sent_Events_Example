class SSEManager {
    constructor(connection) {
        this.connections = [connection]
        console.log(this.connections)
    }

    addConnection(connection) {
        this.connections.push
    }

    findConnection(userID) {
        const connection = this.connections.find(currConnection => currConnection.userID === userID);
        if(!connection) {
            throw 'No connection found with that ID'
        }
        return connection
    }


}