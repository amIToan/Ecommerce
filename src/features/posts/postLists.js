import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PostAuthor from "./Author";
import ReactionButtons from "./Emoji";
import { TimeAgo } from "./Timeago";
export const PostsList = () => {
  const posts = useSelector((state) => state.posts);

  const orderedPosts = posts.slice().sort((a, b) => {
    if (a.date && b.date) {
      return b.date.localeCompare(a.date);
    }
    return a.id - b.id;
  });
  console.log(orderedPosts);
  const renderedPosts = orderedPosts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <div>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </div>
      <ReactionButtons post={post} />
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
    </article>
  ));

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};
