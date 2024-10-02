import axios from 'axios';

import { axiosInstance } from './axios';

export const getallData = async () => {
  try {
    const response = await axios.get('/api/v1/');
    return response;
  } catch (e) {
    console.log(e, 'i am in api');
  }
};

export const addBlog = async (payload) => {
  try {
    const response = await axios.post(`/api/v1/add-blog/`,payload);
    return response;
  } catch (e) {
    console.log(e, 'i am in api');
  }
};

export const deleteBlog = async (payload) => {
    try{
    const response = await axios.delete(`/api/v1/delete-blog/${payload.id}`);
    return response;
    }catch(e){
        return e.message;
    }
}

export const updateBlog = async (payload) => {

  try{
    const response = await axios.put(`/api/v1/update-blog/${payload.id}`,{
      data:payload.blog
    });
    return response;
  }catch(e){
      return e.message;
  }
}

export const addUsers = async (payload) => {

  try{
    const response = await axios.post('/api/v1/signup', payload);
    return response;
  }catch(e){
    return e;
  }
}

export const checkUsers = async (payload) => {

  try{
    const response = await axios.post('/api/v1/login', payload);
    return response;
  }catch(e){
    return e;
  }
}

export const signup = async (payload) => {
  try{
    const response = await axios.post('/api/v1/signup',payload);
    return response;
  }catch(e){
    return e;
  }
}

export const getCurrent = async () => {
  console.log(localStorage.getItem('token'));
  try{
    const response = await axios.get('/api/v1/get-current',{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
    return response
  }catch(e){
    return e;
  }
}

export const addQuestion = async (payload) => {

  try{
    const response = await axios.post('/api/v1/quiz/add-question',payload,{
      headers:{
        'Authorization' : `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response;
  }catch(e){
    return e;
  }
}

export const getQuestions = async () => {

  try{
     const response = await axios.get('/api/v1/quiz/get-questions',{
      headers:{
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
     });
     return response;
  }catch(e){
    return response;
  }
}

