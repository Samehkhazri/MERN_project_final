import "../styles/event.css";
import NavShop from "../components/NavShop";
import { useEffect, useState } from "react";
import axios from "axios";

const Event = () => {
    const[comment,setComment] = useState(null)
    console.log(comment)
    const [newComment ,setNew]=useState('')
    const addComment = (id)=>{
        axios.put('http://localhost:8000//api/event/'+id,{comments:[newComment]}).then(res=>axios.get("http://localhost:8000/api/event")
        .then(({ data }) => setEvent(data))
        .catch((err) => console.log(err))).catch(err=>console.log(err))
    }
    const [like,setLike] = useState(0)
    const [event, setEvent] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/event")
            .then(({ data }) =>{ setEvent(data);setComment(data.comment)})
            .catch((err) => console.log(err));
    }, []);
    const formatDate = (dateString) => {
        const createdAtDate = new Date(dateString);
        return `${createdAtDate.toLocaleDateString('en-US')}`;
    };
    return (
        <div><NavShop />
            <div className="body2">
            
            {/* Blog Area */}
            <section className="blog_area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mb-5 mb-lg-0">
                            <div className="blog_left_sidebar">
                                {/* Article 1 */}
                                {event && event.filter((i,ind)=>ind>0).map((eventItem) => {
                                    return (
                                        <article className="blog_item container" key={eventItem._id}>
                                            <div className="blog_item_img">
                                                <h1 className="name">{eventItem.title}</h1>
                                                <img className="image" src={`/images_db/${eventItem.picture[0]}`} alt="" />
                                                <a className="blog_item_date">
                                                    <h3>{formatDate(eventItem.datetime)}</h3>
                                                </a>
                                            </div>
                                            <div className="blog_details">
                                                <p>
                                                {eventItem.content}
                                                </p>
                                                <ul className="blog-info-link">
                                                    <li><button onClick={()=>setLike(like+1)} href="#">Like {like}</button></li>
                                                    <li>
                                                        {comment && comment.map(co=>{
                                                            return(
                                                                <li>{co}</li>
                                                            )
                                                        })}
                                                        <input type="text" onChange={e=>setNew(e.target.value)} />
                                                        <button onClick={()=>addComment(eventItem._id)}>comment</button>
                                                        </li>
                                                </ul>
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </div>
    );
}

export default Event;
