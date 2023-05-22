'use strict';

const Mongodb = require('./mongodb');
const mongodbUrl =
  'mongodb+srv://phm:nVl4ZkTjS3SP6LD8@peui-cli.uokjv8g.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'peui-cli';
function mongo() {
  return new Mongodb(mongodbUrl, dbName);
}

module.exports = mongo;
