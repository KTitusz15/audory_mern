import React, { useState } from 'react'
import axios from 'axios'

const PostForm = () => {
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
        await axios.post('/api/posts', formData);
        console.log('Post created successfully');
        // You can handle success here, like showing a success message or redirecting the user
      } catch (error) {
        console.error('Error creating post:', error);
        // Handle error, show error message to the user, etc.
      }
    };

  return (
    <div className="mx-auto p-5 my-3 bg-gray-300 shadow-[0px_0px_10px_0px_#1e1b4b] rounded-xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-700 text-white w-11/12 self-center">
        <form>
        <h2 className='text-3xl mb-5'>Create Post</h2>
        <div className="grid gap-6 mb-6 md:grid-cols-2 p-3">
        <div>
            <label htmlFor="title" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Title</label>
            <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="An amazing song idea" required />
        </div>
        <div>
            <label htmlFor="phone" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Artist Name</label>
            <input type="text" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Artist Name" required />
        </div>
        <div>
            <label htmlFor="genre" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Genre</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="House" required />
        </div>
        <div>
            <label htmlFor="company" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">SoundCloud link</label>
            <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://on.soundcloud.com/example" required />
            <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">Please make sure you use the correct private link. Here is a short <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">guide</a>.</p>
        </div>  
        <div>
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
            <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="A short description for your post..."></textarea>    
        </div> 
    </div>
    </form>
      
    <form onSubmit={handleSubmit}>
      <input type="text" className='text-black' name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
      <input type="text" className='text-black' name="user" value={formData.user} onChange={handleChange} placeholder="User" required />
      <input type="text" className='text-black' name="genre" value={formData.genre} onChange={handleChange} placeholder="Genre" required />
      <input type="number" className='text-black' name="like" value={formData.like} onChange={handleChange} placeholder="Like" required />
      <input type="text" className='text-black' name="link" value={formData.link} onChange={handleChange} placeholder="Link" required />
      <textarea name="desc" className='text-black' value={formData.desc} onChange={handleChange} placeholder="Description" required />
      <button className='text-black' type="submit">Submit</button>
    </form>
    </div>
  )
}

export default PostForm