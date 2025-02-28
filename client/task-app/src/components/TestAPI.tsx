import React, { useEffect, useState } from 'react'

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const TestAPI = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState("");
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.log("Error fetching posts");
      }
    }
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(post => post.title === search);

  return (
    <>
      <div>
        <h2>Search Bar</h2>
        <input 
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <ul>
          {
          search ? filteredPosts.map((post) => <li key={post.id}>{post.title}</li>) : posts.map((post) => <li key={post.id}>{post.title}</li>)
          }
        </ul>
      </div>
    </>
  )
}

export default TestAPI