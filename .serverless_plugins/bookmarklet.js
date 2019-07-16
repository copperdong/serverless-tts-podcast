// var url = btoa(window.location.href);
// var xhr = new XMLHttpRequest();
// xhr.open('POST', 'https://pubsub.googleapis.com/v1/projects/${conf.gcp.project}/topics/${conf.gcp.parserPubSubTopic}:publish?key=${conf.gcp.pubSubApiKey}', true);
// xhr.setRequestHeader('Content-Type', 'application/json');
// xhr.send('{ "messages": [{ "data": "' + url + '" }] }');

const chalk = require('chalk');
const conf = require('../config.json')

// Generated from the code commented out at the top of the file using:
// https://mrcoles.com/bookmarklet/
const bookmarklet = `javascript:(function()%7Bvar%20url%20%3D%20btoa(window.location.href)%3Bvar%20xhr%20%3D%20new%20XMLHttpRequest()%3Bxhr.open('POST'%2C%20'https%3A%2F%2Fpubsub.googleapis.com%2Fv1%2Fprojects%2F${conf.gcp.project}%2Ftopics%2F${conf.gcp.parserPubSubTopic}%3Apublish%3Fkey%3D${conf.gcp.pubSubApiKey}'%2C%20true)%3Bxhr.setRequestHeader('Content-Type'%2C%20'application%2Fjson')%3Bxhr.send('%7B%20%22messages%22%3A%20%5B%7B%20%22data%22%3A%20%22'%20%2B%20url%20%2B%20'%22%20%7D%5D%20%7D')%7D)()`

class Bookmarklet {
 constructor() {
    this.hooks = {
      'info:info': this.displayBookmarklet,
    };
  }

  displayBookmarklet() {
    console.log(chalk.green.underline('Bookmarklet'));
    console.log(bookmarklet);
  }
}

module.exports = Bookmarklet;
