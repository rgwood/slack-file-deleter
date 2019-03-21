require('dotenv').config();
const { WebClient } = require('@slack/client');

// An access token (from your Slack app or custom integration - xoxp, xoxb)
const token = process.env.SLACK_TOKEN;

const web = new WebClient(token);

const deleteBeforeThisInUnixTime = new Date(2018,7).getTime() / 1000;

(async () => {
    console.log('Reading list of files');
    const res = await web.files.list({ts_to:deleteBeforeThisInUnixTime.toString()});

    for (const file of res.files) {
        var timestamp = new Date(file.timestamp * 1000);
        console.log(`Timestamp ${timestamp}, size: ${file.size}, name: ${file.name}`);
        
        const deleteRes = await web.files.delete({file: file.id});
        console.log(`File deleted OK: ${deleteRes.ok}`);
    }
  })();

