var md5 = require('md5');

exports.handler = async (event, context) => {
    let body = `{}`
    if (event.httpMethod === "POST") {
        //save json
        body = `{"id": "${md5(event.body)}"}`
    } else if (event.queryStringParameters && event.queryStringParameters.id){
        const id = event.queryStringParameters.id
        //fetch json for id
        body = `{"id": "${id}", {"tree": {}}`
    }
    return {
      statusCode: 200,
      body: body
    };
  };