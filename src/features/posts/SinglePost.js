import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import PostAuthor from "./Author";
export const SinglePostPage = () => {
  const { postId } = useParams();
  console.log(postId);
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <PostAuthor />
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    </section>
  );
};
