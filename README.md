# slack-file-deleter
A script to delete old files from a Slack team. Useful for staying within the free tier limits.

## Usage 

Adjust the `deleteBeforeThisInUnixTime` variable in index.js however you like.

Set your Slack OAuth access token in a `.env` file like `SLACK_TOKEN=...`

Then `node index.js` and enjoy.