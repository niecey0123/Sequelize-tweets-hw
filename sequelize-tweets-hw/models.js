const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'tweets_db',
  dialect: 'postgres',
  define: {
    underscored: true,
    returning: true
  }
});
  const Tweets = sequelize.define('tweets', {
  text: Sequelize.STRING,
  hashtag: Sequelize.STRING,
  retweets: Sequelize.INTEGER
});

module.exports = {
  Tweets,
  sequelize
}
