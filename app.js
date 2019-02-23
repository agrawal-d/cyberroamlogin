var request = require('request');
console.log("STARTING");
request.post(
    'http://172.16.0.30:8090/httpclient.html',
    {
        form: {
            mode: '191', username: 'f20XXXXXX', password: 'XXXXXXXX', btnSubmit:'Login'
        }
    },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            if(body.search("logged in")!=-1){
                console.log("Logged in to cyberroam")
            }else{
                console.error("Invalid Credentials / Out of LIMIT / Server error.");
            }
        } else {
            console.error("Failed to log in ->\n\n");
            console.error(error);
        }
    }
);