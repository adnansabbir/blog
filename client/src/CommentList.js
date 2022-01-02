import React from "react";

const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content;
    let style;

    if (comment.status === "approved") {
      content = comment.content;
    }

    if (comment.status === "pending") {
      content = "This comment is awaiting moderation";
      style = {color: 'orange'};
    }

    if (comment.status === "rejected") {
      content = "This comment has been rejected";
      style = {color: 'red'};
    }

    return <li key={comment.id} style={style}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
