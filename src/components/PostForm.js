import React, { useState } from 'react';

export default function PostForm({ title = '', description = '' }) {
  const [titleInput, setTitleInput] = useState(title);
  const [descriptionInput, setDescriptionInput] = useState(description);

  console.log('title prop: ', title);

  const myFunction = () => {
    console.log('running my function');
  };
  myFunction();
  return (
    <div>
      <label>Title</label>
      <input type="text" />
      <label>Description</label>
      <input type="text" />
      <button>Submit</button>
    </div>
  );
}
