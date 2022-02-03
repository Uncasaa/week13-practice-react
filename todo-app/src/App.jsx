import { useState } from 'react';
import './App.css';


function App() {
  
  const [posts,setPosts] = useState([])
  function add () {
    setPosts([...posts, {
      title:'random',
      postText:'szöveguj',
      date:'2022.2.25'
    }])
  }

  return (
    <div className="App">
      <h1>Blog Posts</h1>

      <div>
        <input placeholder='title'  />
        <input placeholder='post' />
        <button onClick={add}>New Post</button>
        <button onClick={() => {setPosts([])}}>Delete All</button>

      </div>

      {posts.map((item) => {
        return (
          <div key={item.title} > 

            <h2>{item.title}</h2>
            <p>{item.postText}</p>
            <p>{item.date}</p>
            <input placeholder='New Post Title' />
            <input placeholder='New Post Text' />
            <button>Edit</button>
            <button>Delete</button>

          </div>
        )
      })}
    </div>
  );
}

export default App;
