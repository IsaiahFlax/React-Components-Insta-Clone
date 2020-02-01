// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = ({comments}) => {
  // Add state for the comments
console.log("comment section", comments)
const [commentState, newCommentState] = useState(comments)
console.log("comment state", commentState)
  return (
    <div>
      {comments.map( x => {
        return (
          <Comment comment = {x} />
        )
      })}
      <CommentInput newComment = {newCommentState}/>
    </div>
  );
};

export default CommentSection;
