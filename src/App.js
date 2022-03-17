import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { configureStore } from '@reduxjs/toolkit';
import { PostsList } from './features/posts/postLists';
import { AddPostForm } from './features/posts/Addpostfrom';
import { SinglePostPage } from './features/posts/SinglePost';
import EditPostForm from './features/posts/EditForm'
function App() {
  // const store = configureStore({
  //   reducer: counterSlice.reducer
  // })

  // Can still subscribe to the store
  // store.subscribe(() => console.log(store.getState()))

  // Still pass action objects to `dispatch`, but they're created for us

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
      { <button onClick={() => store.dispatch(incremented())}>Toan dep trai</button> }
      <PostsList />
      <AddPostForm /> */}
      <Routes>
        <Route path="/" element={<> <PostsList /> <AddPostForm /></>} />
        <Route exact path="/posts/:postId" element={<SinglePostPage />} />
        <Route exact path="/editPost/:postId" element={<EditPostForm />} />
      </Routes>
    </div>
  );
}

export default App;
