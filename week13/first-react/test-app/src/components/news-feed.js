import React from 'react';
import Post from './post';

let e = React.createElement;

export default class NewsFeed extends React.Component {
    render() {
        let comments = [
            {
                content: "This is my post",
                username: "Tommy",
                date: '12-12-2018'            
            },
            {
                content: "This is another comment",
                username: "Sally",
                date: '12-17-2018'            
            },
            {
                content: "Here's a comment from me.",
                username: "Sally",
                date: '12-19-2018'            
            },
        ];
        return (
            <div className='container' >
                <Post {...{comments: comments, content: 'this is my post content!'}}/>
                <Post />
                <Post />
                <Post />
             

            </div>
        );
    }
}
