import React from "react";

const PostCard = ({ post }) => {
  return (
    <div>
      <h1>{post.id}</h1>
      <h1>{post.name}</h1>
      <p>{post.adresse}</p>
      <p>{post.email} </p>
      <h2>{post.phone}</h2>
    </div>
  );
};

export default PostCard;
