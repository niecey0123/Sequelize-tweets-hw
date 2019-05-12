const { Tweets } = require('./models');
const { data } = require('./data');
const { Op } = require('sequelize')

const main = async ()=>{
  try{
    //1. Write a sequelize query to find all the tweets.
    const allOfTweets = await Tweets.findAll();
    //2. Write a query to find the tweet with a hashtag: "#react"
    const reaction = await Tweets.findAll({
      where: {
        hashtag: '#react'
      }
    });
    //3. Write a query to find the tweet with more than 50 retweets.
    const extraRetweet = await Tweets.findAll({
      where: {
        retweets:
        {
          [Op.gt]: 50
        }
      }
    });
    //4. Write a query to find the tweet with an id of 3
    const findTweet = await Tweets.findAll({
      where: {
        id: 3
      }
    });
    //5. Write a query to delete the tweet with an id of 3
    const throwItAway = await Tweets.destroy({
      where: {
        id: 3
      }
    });
  }
  const run = async () => {
    await main();
    process.exit();
  }
}
main();