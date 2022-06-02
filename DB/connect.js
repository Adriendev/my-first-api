const { default: mongoose } = require('mongoose')

const MONGO_URI = "mongodb://localhost:27017/webdev-905"

async function openConnection() {
  await mongoose.connect(MONGO_URI)
  console.log(
    `Connected to Mongo! Database name: "${x.connections[0].name}"`)
}

module.exports = openConnection
