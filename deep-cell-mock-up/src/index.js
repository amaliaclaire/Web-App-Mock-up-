import React from 'react';
import ReactDOM from 'react-dom';
// import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">

      <CommentDetail
      author="sam"
      date="today"
      text="aye"
      />

      <CommentDetail
      author="alex"
      date="tuesday"
      text="alex"
      />

      <CommentDetail
      author="jane"
      date="wednesday"
      text="bunny"
      />

    </div>
  )
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
