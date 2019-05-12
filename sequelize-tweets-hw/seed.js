//import your models on this line
const { Tweets } = require('./models');
const { data } = require('./data');

const main = async () => {

  const newData = data.map(tweet=>{
    Tweets.create({
      text: data.text,
      hashtag: data.hashtag,
      retweets: data.retweets
    })
  });
};

main();
