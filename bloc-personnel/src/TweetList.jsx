import React from 'react';
import{Tweet} from './Tweet';
// import { v4 as uuidv4 } from 'uuid';

// const tweets = [
//   { id: uuidv4(), name: "User1", content: "Hello World!", like: 5 },
//   { id: uuidv4(), name: "User2", content: "React is awesome!", like: 10 },
//   { id: uuidv4(), name: "User3", content: "I love coding!", like: 3 }
// ];



export function TweetList ({tweets, onDelete, onLike}){
    if(!tweets || tweets.length === 0){
        return "No tweets";
    }
    return(
        <div className="tweet-container">
            {tweets.map((tweet)=> {
                return(
                    <Tweet
                    key={tweet.id}
                    id={tweet.id}
                    name={tweet.name}
                    content={tweet.content}
                    like={tweet.like}
                    onDelete={onDelete}
                    onLike={onLike}
                    />
                );

            })}

        </div>
    );
}
export default TweetList;


