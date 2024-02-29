import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'


/* Components */
import PostDetails from '../components/PostDetails'
import Filter from '../components/Filter'
import PostForm from '../components/PostForm'
import PostsContext from '../context/PostContext'


const Home = () => {
    const { posts, createPost } = useContext(PostsContext);

   

    const handleCreatePost = async (formData) => {
        try {
            await createPost(formData);
            // Post created successfully, no need to re-fetch posts as it's handled by PostsProvider
        } catch (error) {
            console.error('Error creating post:', error);
            // Handle error, show error message to the user, etc.
        }
    };

    return (
        <div className='home'>
            <div className="posts">
                <div className="flex flex-col p-4 sm:ml-64">
                    <div className="flex flex-col self-center p-5 mb-3 mt-[3.75rem] bg-gray-500 shadow-[0px_0px_10px_0px_#1e1b4b] rounded-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 border border-gray-700 text-white w-11/12">
                        <div className='text-2xl md:text-3xl lg:text-4xl'>Feedback</div>
                        <Filter />
                        {posts && posts.map((post) => (
                            <PostDetails key={post._id} post={post} />
                        ))}
                        
                    </div>
                    <PostForm onCreatePost={handleCreatePost} />

                </div>
            </div>

        </div>
    )
}

export default Home