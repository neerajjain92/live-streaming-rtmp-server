const express = require('express');
const app = express();

app.use(express.urlencoded());

app.post("/auth", function(req, res) {
    /* This server is only available to nginx */
    const streamKey = req.body.key;

    /* We can validate the streamKey from database as well */
    if(streamKey === 'supersecret') {
        console.log('Stream Key is valid....')
        res.status(200).send();
        return;
    }

    /* Rejecting the stream as it's from unAuthorized user */
    console.log('Rejecting the Stream due to bad stream key ', streamKey);
    res.status(403).send();
});

app.listen(8000, function() {
    console.log("Listening on port 8000!!!....");
})