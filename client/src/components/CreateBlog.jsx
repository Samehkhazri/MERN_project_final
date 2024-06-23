import { useState } from "react";
import axios from "axios";
import '../styles/createBlog.css';
const BlogCreate = () => {
    const [blog,setBlog] = useState({
        title:'',
        content:'',
        images:[]
    });
    
    const formHandler = e =>{
        e.preventDefault();
        const formData = new FormData();
        for (let i = 0;i<blog.images.length ;i++){
            formData.append('files',blog.images[i])
        }
        formData.append("content", blog.content); 
        formData.append("title", blog.title); 
        axios.post('http://localhost:8000/api/blog',formData).then(result=>console.log(result)).catch(err=>console.log(err))
    }
    return (
        <div className="blog">
            <h3 className="titel">Write a blog:</h3>
            <form onSubmit={formHandler}>
                <label className="label" >Title</label>
                <input className="inp" type="text" onChange={(e) => setBlog({ ...blog, title: e.target.value })} />
                <label className="label" >Picture</label>
                <input className="inp" type="file" multiple onChange={(e) => setBlog({ ...blog, images: e.target.files })} />
                <label className="label" >Content</label>
                <textarea onChange={e=>setBlog({...blog,content:e.target.value})} cols="30" rows="10" className="textt"></textarea>
                <button className="btn2" type="submit">Make blog</button>
            </form>
        </div>
    )
}

export default BlogCreate