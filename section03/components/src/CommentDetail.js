import React from "react";

const CommentDetail = ({ avatar, author, content, timeAgo }) => {
  let date = new Date(timeAgo);
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {author}
        </a>
        <div className="metadata">
          <span className="date">
            Today at {date.getHours() + ":" + date.getMinutes()}
          </span>
        </div>
        <div className="text">{content}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
