import React, { useEffect, useState } from 'react'
import axios from 'axios'


/* Components */
import PostDetails from '../components/PostDetails'
import Filter from '../components/Filter'
import PostForm from '../components/PostForm'

const Home = () => {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        axios.get('/api/posts')
            .then(response => {
                setPosts(response.data); // Update state with data from API
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [])

  return (
    <div className='home'>
        <div className="posts">
            <div class="p-4 sm:ml-64">   
                <Filter />
                <div className="mx-auto p-5 my-3 bg-gray-500 shadow-[0px_0px_10px_0px_#1e1b4b] rounded-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 border border-gray-700 text-white w-11/12 self-center">
                {posts && posts.map((post) => (
                    <PostDetails key={post._id} post={post} />
                ))}
                </div>
                <PostForm />
            </div>
        </div>
        
    </div>  
  )
}

export default Home