import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Posts from './Posts';
import Pagination from './Pagination';



function App() {
  const [posts,setPosts] = useState([]);
  const [loading,setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {

    const fetchPosts = async () => {
      setLoading(true);
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      setPosts(response.data);
      setLoading(false);
  }
  fetchPosts();

},[]);

//get current posts
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

//change page

const paginate = 
    (pageNumber) => setCurrentPage(pageNumber);


  return (
    <>

      <h1>My blog</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>

    </>
  )
}

export default App
