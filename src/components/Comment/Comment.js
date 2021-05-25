import React from 'react';

const Comment = (props) => {
    const {name, email, body, id} = props.comment
    return (
        <div>
            <h5>ID:{id}</h5>
            <p>{name} : {email}</p>
            <p>{body}</p>
        </div>
    );
};

export default Comment;