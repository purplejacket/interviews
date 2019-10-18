const md5 = require('md5');
const AWS = require('aws-sdk'); 
AWS.config = new AWS.Config();
AWS.config.update({ region: 'us-east-1', 
                    accessKeyId: process.env.ACCESS_KEY_ID,
                    secretAccessKey: process.env.SECRET_ACCESS_KEY     
                });

exports.handler = function (event, context) {
    let body = `{}`
    s3 = new AWS.S3({apiVersion: '2006-03-01'});
    if (event.httpMethod === "POST") {
        const id = md5(event.body)
        //save json
       
        const path = `interviews/trees/${id}`
        const params = {
            ACL: "public-read", 
            Body: event.body, 
            Bucket: 'hingehealth-engineering', 
            Key: path
           };
           s3.putObject(params, function(err, data) {
             if (err) body = `{"err": "${err}"}`; // an error occurred
             else     body = `{"id": "${id}"}`;   // successful response
             return {
                statusCode: 200,
                body: body
              };
           });

    } else if (event.queryStringParameters && event.queryStringParameters.id){
        const id = event.queryStringParameters.id
        //fetch json for id
        body = `{"id": "${id}", {"tree": {}}`
        return {
            statusCode: 200,
            body: body
          };
    } else {
        return {
            statusCode: 200,
            body: body
          };
    }
  };