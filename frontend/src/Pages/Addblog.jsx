import React, { useState, useEffect } from 'react';
import { addBlog, updateBlog } from './ApiCalls';
import { useLocation } from 'react-router-dom';

function AddBlog() {
  const location = useLocation();
  const blogToEdit = location.state?.blog;

  const [format, setFormat] = useState({
    name: '',
    title: '',
    description: '',
    imgUrl: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [type, setType] = useState('add');

  useEffect(() => {
    if (blogToEdit) {
      setFormat(blogToEdit);
      setType('edit');
    }
  }, [blogToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (type === 'add') {
        const response = await addBlog(format);
        console.log(response.data.message);
      } else {
        const response = await updateBlog({
          id: blogToEdit._id,
          blog: format
        });
        console.log(response.data.message);
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(e.message || 'An error occurred');
    }
  };

  const handleChange = (e) => {
    setFormat({ ...format, [e.target.name]: e.target.value });
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name='name'
          value={format.name || ''}
          onChange={handleChange}
          placeholder='Enter your name'
        />
        <input
          name='title'
          value={format.title || ''}
          onChange={handleChange}
          placeholder='Enter title of blog'
        />
        <textarea
          name='description'
          value={format.description || ''}
          onChange={handleChange}
          placeholder='Enter description'
        />
        <input
          name='imgUrl'
          value={format.imgUrl || ''}
          onChange={handleChange}
          placeholder='Enter image link'
        />
        <button type='submit'>
          {type === 'add' ? 'Add' : 'Update'}
        </button>
      </form>

      {loading && <div>Loading...</div>}
    </div>
  );
}

export default AddBlog;
