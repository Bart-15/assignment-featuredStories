import http from 'http';
import { envVariables } from './config/keys.js'
const port = envVariables.PORT || 5001;
import getTimeStories from './data/getTimeStories.json' assert { type: "json" };


http.createServer((req, res) => {
    // Set CORS headers
    const headers = {
        'Access-Control-Allow-Origin': '*', 
        'Access-Control-Allow-Methods': 'OPTIONS, GET',
    };

	if ( req.method === 'OPTIONS' ) {
		res.writeHead(200, headers);
		res.end();
		return;
	}
    

    res.writeHead(200, headers);
    
    //check route
    const url = req.url;
    
    if(url === "/getTimeStories"){
        res.writeHead(200, headers);
        res.write(JSON.stringify(getTimeStories));
        res.end();
    } else {
        res.write('<p>This is my get route using native node js, to access stories add the /getTimeStories in the url :)</p>');
        res.end();
    }


}).listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});;


