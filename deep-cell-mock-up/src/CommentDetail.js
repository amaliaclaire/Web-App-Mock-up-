import React from 'react';
// import faker from 'faker';

const CommentDetail = props => {

  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwig-deq9_LfAhXEHTQIHfwgBPIQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Fcat-whiskers-kitty-tabby-20787%2F&psig=AOvVaw0USuzgb8NUdt_bLfgqaa1J&ust=1547749765791652"/>
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
      </div>
      <div className="metadata">
        <span className="date">{props.date}</span>
      </div>
      <div className="text">{props.text}</div>


    </div>
  )
}

export default CommentDetail;
