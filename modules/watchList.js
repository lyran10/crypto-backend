let db = require("../connections/connections.js");

const _addToWatchList = (id,coin) => {
  return db("watchlist").insert({ user_id : id,coins : coin}).returning("*");
};

const _checkInList = (id) => {
  return db("watchlist").where({ coins: id }).returning("*");
};

const _getList = (id) => {
  return db("watchlist").where({ user_id: id }).returning("*");
};

const _deleteCoin = (id) => {
  console.log(id)
  return db("watchlist").del().where({ coins: id }).returning("*");
};

module.exports = { _addToWatchList, _checkInList, _getList, _deleteCoin };
