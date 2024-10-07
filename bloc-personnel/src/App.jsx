// chef de projet
// Nogaye diop
// Ndeye anta diop

// App.jsx
import { TweetForm } from './TweetForm.jsx'; // Notez les accolades autour de TweetForm
import {Tweet} from"./Tweet";
import React, { useState } from 'react';
import TweetList from './TweetList.jsx';

const DEFAULT_TWEET=[
  {
    id:0,
    name:"Anta",
    content:"je vais bien",
    like:1000,
  },
  {
    id:0,
    name:"Diarra",
    content:"xoocool",
    like:20,
  },
  {
    id:0,
    name:"Soda",
    content:"super",
    like:0,
  },
  {
    id:0,
    name:"Diobe",
    content:"fun",
    like:12,
  },
];
const useTweets = () =>{
  const[tweets, setTweets] = useState(DEFAULT_TWEET);
  const addTweet = (tweet) =>{
    setTweets((curr) =>{
      const newTweet={
        // id:curr[curr.length - 1] ?.id + 1 ?? 0,
        id: (curr.length > 0 ? curr[curr.length - 1].id + 1 : 0),
        name: tweet.name,
        content: tweet.content,
        like: 0,
      };
      return[...tweets, newTweet];
    });
  };
  const onDelete = (tweetId) =>{
    setTweets((curr) => curr.filter((tweet) => tweet.id !== tweetId));
  };
  const onLike = (tweetId) => {
    setTweets((curr) =>{
      const copyTweet = [...curr];

      const likedTweet = copyTweet.find((tweet) => tweet.id === tweetId);
      likedTweet.like += 1;

      return copyTweet;
    });
  };
  return{ onLike, onDelete, addTweet, tweets} ;
};
function App (){
  const { onLike, onDelete, addTweet, tweets} = useTweets();
  return(
    <div>
    <TweetForm onSubmit={addTweet} />
    <TweetList tweets={tweets} onDelete={onDelete} onLike={onLike} />
    </div>
  );
}


export default App;