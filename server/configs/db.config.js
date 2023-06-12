const username = "kurkoc";
const password = "ag9T2rvBXWUNYtWW";
const cluster = "cluster0.g7y1elu.mongodb.net";
const dbname = "nodeshop";

const url = `mongodb+srv://${username}:${password}@${cluster}/${dbname}?retryWrites=true&w=majority`

module.exports = {
	url
};