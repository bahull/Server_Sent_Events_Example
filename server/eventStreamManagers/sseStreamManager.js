class SSEStreamManager {
    constructor(connection, id, removeConnection) {
        this.connection = connection;
        this.id = id;
        this.heartbeat = setInterval(() => {
            if(this.connection.req.aborted) {
                removeConnection(this.id)
            }
            this.connection.write('\n\n');
            console.log('Calling a heartBeat')
        }, 40000)
    }

    killHeartbeat() {
        console.log('Killing Heartbeat')
        clearInterval(this.heartbeat)
    }

}

module.exports = SSEStreamManager;