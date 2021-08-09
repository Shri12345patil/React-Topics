import React, { useEffect, useState, useRef } from "react";

// 1. Destructure the `subreddit` from props:
function Fetch({ subreddit }) {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        // 2. Use a template string to set the URL:
        const res = await fetch(
          `https://www.reddit.com/r/${subreddit}.json`
        );
  
        const json = await res.json();
        setPosts(json.data.children.map(c => c.data));
      }
  
      fetchData();
  
      // 3. Re-run this effect when `subreddit` changes:
    }, [subreddit, setPosts]);
  
    return (
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    );
  }
  
 

  export default Fetch;