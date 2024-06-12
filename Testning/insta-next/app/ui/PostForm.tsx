"use client";

import React from "react";

function PostForm() {
  const handleSubmit = () => {
    console.log("Jag är sparad");
  };

  return (
    <div>
      <h1>Här kommer ett formulär för att skapa en post</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" />
        <textarea name="content" placeholder="Skriv din text.." />
        <button>Skapa post</button>
      </form>
    </div>
  );
}

export default PostForm;
