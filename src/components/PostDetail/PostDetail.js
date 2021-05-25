import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {id} = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    },[])
    useEffect(()=>{
        const url= `https://jsonplaceholder.typicode.com/comments?postId=${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    },[])
    return (
        <div>
            <h1>This is Post detail {id} </h1>
            <h3>User ID: {post.id} </h3>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p>Number of comments: {comments.length}</p>
            {
                comments.map(comment=><Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default PostDetail;