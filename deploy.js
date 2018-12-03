var request = require('request');

//var project = process.env.CIRCLE_PROJECT_REPONAME;
//var token = process.env.DOCKER_HUB_TOKEN;

var headers = {
  'Content-Type': 'application/json'
};

//var dataString = `{"docker_tag": "${process.env.CIRCLE_BRANCH}"}`;
var dataString = `{"docker_tag": "master"}`;

var options = {
  //url: 'https://registry.hub.docker.com/u/pereric/' + project + '/trigger/' + token + '/',
  url: 'https://registry.hub.docker.com/u/pereric/docker-ci/trigger/52e6aea0-d441-4140-8989-743db3f0eb50/',
  method: 'POST',
  headers: headers,
  body: dataString
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
}