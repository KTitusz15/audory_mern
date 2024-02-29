import React, { useState } from 'react'
import axios from 'axios'

const PostForm = ({ onCreatePost }) => {
  const [formData, setFormData] = useState({
    title: '',
    user: '',
    genre: '',
    like: 0,
    link: '',
    desc: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onCreatePost(formData); // Call the onCreatePost function passed as prop
      // Optionally, you can clear the form fields or show a success message here
    } catch (error) {
      console.error('Error creating post:', error);
      // Handle error, show error message to the user, etc.
    }
  };

  return (
    <div className="mx-auto p-5 mt-3 mb-20 bg-gray-300 shadow-[0px_0px_10px_0px_#1e1b4b] rounded-xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-700 text-white w-11/12 self-center">
      <form onSubmit={handleSubmit}>
        <h2 className='text-3xl mb-5'>Create Post</h2>
        <div className="grid gap-6 mb-6 md:grid-cols-2 p-3">
          <div>
            <label htmlFor="title" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Title</label>
            <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-900 focus:border-indigo-900 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-900 dark:focus:border-indigo-900' name="title" value={formData.title} onChange={handleChange} placeholder="An amazing song idea" required />
          </div>
          <div>
            <label htmlFor="use" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Artist Name</label>
            <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-900 focus:border-indigo-900 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-900 dark:focus:border-indigo-900' name="user" value={formData.user} onChange={handleChange} placeholder="Artist Name" required />
          </div>
          <div>
            <label htmlFor="genre" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Genre</label>
            <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-900 focus:border-indigo-900 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-900 dark:focus:border-indigo-900' name="genre" value={formData.genre} onChange={handleChange} placeholder="House" required />
          </div>
          <div>
            <label htmlFor="link" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">SoundCloud link</label>
            <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-900 focus:border-indigo-900 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-900 dark:focus:border-indigo-900' name="link" value={formData.link} onChange={handleChange} placeholder="https://on.soundcloud.com/example" required />
            <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">Please make sure you use the correct private link. Here is a short <a href="#" className="font-medium text-blue-600 hover:underline dark:text-indigo-900">guide</a>.</p>
          </div>
          <div>
            <label htmlFor="desc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
            <textarea name="desc" className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-900 focus:border-indigo-900 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-900 dark:focus:border-indigo-900' value={formData.desc} onChange={handleChange} placeholder="A short description for your post..." required />
          </div>
          <div>
            <label htmlFor="like" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Likes</label>
            <input type="number" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-900 focus:border-indigo-900 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-900 dark:focus:border-indigo-900' name="like" value={formData.like} onChange={handleChange} placeholder="Likes" required />
          </div>
        </div>
        <div className='flex flex-col'>
          <button type='submit' className="self-center relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-indigo-90 group-hover:from-purple-600 group-hover:to-indigo-90 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Submit
            </span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default PostForm