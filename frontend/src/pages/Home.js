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
                        <div>Feedback</div>
                        <Filter />
                        {posts && posts.map((post) => (
                            <PostDetails key={post._id} post={post} />
                        ))}
                        <div className="self-center">
                            <a target='_blank' href="" className="self-center inline-flex items-center justify-center p-0.5 mt-5 mb-2 me-2 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 transition-transform duration-200 hover:scale-105">
                                <span className="text-center relative text-xs sm:text-sm md:text-lg lg:text-xl px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Load more...
                                </span>
                            </a>
                        </div>
                    </div>
                    <PostForm onCreatePost={handleCreatePost} />

                </div>
            </div>

        </div>
    )
}

export default Home