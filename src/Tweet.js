import React from "react";
import Avatar from "./Avatar";
import Message from "./Message";
import NameWithHandle from "./NameWithHandle";

export default function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <NameWithHandle name={tweet.name} handle={tweet.handle} /> <Time />
        <Message />
        <div className="buttons">
          <Reply />
          <RetweetButton />
          <LikeButton />
          <MoreOPtionsButton />
        </div>
      </div>
    </div>
  );
}

// Accessories
const Time = () => <span className="time">1min ago</span>;

const Reply = () => <i className="fa fa-reply reply-button" />;

const RetweetButton = () => <i className="fa fa-retweet retweet-button" />;

const LikeButton = () => <i className="fa fa-heart like-button" />;

const MoreOPtionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);
