class DatabaseConnection {
    constructor() {
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = this
            this.connection = this.createConnection()
        }
        return DatabaseConnection.instance
    }


    createConnection() {
        console.log('Conectando ao banco com sucesso')
        return {
            connected: true, connectionId: Math.random().toString(36).substr(2, 9)
        }
    }

    getConnection() {
        return this.connection
    }
}


module.exports = new DatabaseConnection()