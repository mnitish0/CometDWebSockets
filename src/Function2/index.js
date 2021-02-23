const AWS = require('aws-sdk'); const ddb = new AWS.DynamoDB.DocumentClient();
function addConnectionId(connectionId) { return ddb.delete({ TableName: 'cometdwebsockets-harrysanboxenvironment-ConnectedClients-1KKM7J5EOSQVN', Key: { connectionid: connectionId, }, }).promise(); }
exports.handler = (event, context, callback) => { const connectionId = event.requestContext.connectionId; addConnectionId(connectionId).then(() => { callback(null, { statusCode: 200, }) }); }
