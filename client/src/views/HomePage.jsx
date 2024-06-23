import addCircle from '/images/add_circle.svg';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import '../styles/home.css'
import { Link } from 'react-router-dom';
const HomePage = ({loggedUser}) => {
    const [items, setItems] = useState(null);
    
    useEffect(() => {
        async function getItems() {
            try {
                const allItems = await axios.get('http://localhost:8000/api/item')
                setItems(allItems.data)
            } catch (error) {
                console.log(error)
            }
        }
        getItems();
    }, [])
    return (
        <div>
            <Navbar loggedUser={loggedUser} />
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1 className='carF'>Welcome to CarFancy<span className="d-block">your go-to for automotive style and passion! </span></h1>
                                <p className="mb">Explore our curated collection of car accessories, stay updated on car competitions, and discover the latest cars available in our country. Shop now and embrace the automotive lifestyle</p>
                                <p><Link to='/shop' className="btn me-2" style={{background:'#95b5bf'}}>Shop Now</Link><a href="#" className="btn btn-white-outline">Explore</a></p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-5 mb-5  mb-lg-0 "  data-aos="fade-right">
                            <img src="/images/image3.jpg" className=" w-100" style={{ height: '700px' }} />
                        </div>
                        {items && items.filter((item, idx) =>idx==0 || idx==1).map(item => {
                            return(
                                
                                <div key={item._id} className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0 mt-5" data-aos="fade-left">
                                    <a className="product-item" href="cart.html">
                                    <img src={`/images_db/${item.images[0]}`} className="img-fluid product-thumbnail" alt="Product 2" />
                                <h3 className="product-title">{item.title}</h3>
                                <div>
                                    <strong className="product-price">{item.price} DT</strong>
                                </div>
                                <span className="icon-cross">
                                    <img src={addCircle} className="img-fluid" alt="Cross" />
                                </span>
                            </a>
                        </div>
                            )
                        })}
                    </div>
                    <div className='row'>
                    {items && items.filter((item, idx) => idx==2 || idx==3).map(item => {
                            return(
                                <div key={item._id} className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0 mt-5" data-aos="fade-right">
                                    <a className="product-item" href="cart.html">
                                    <img src={`/images_db/${item.images[0]}`} className="img-fluid product-thumbnail" alt="Product 2" />
                                    <h3 className="product-title">{item.title}</h3>
                                <div>
                                    <strong className="product-price">{item.price} DT</strong>
                                </div>
                                <span className="icon-cross">
                                    <img src={addCircle} className="img-fluid" alt="Cross" />
                                </span>
                            </a>
                        </div>
                            )
                        })}
                        <div className="col-md-12 col-lg-5 mb-5  mb-lg-0 "data-aos="fade-left">
                            <img src="/images/ArHoodies.webp" className=" w-100" style={{ height: '700px' }} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-md-12 col-lg-5 mb-5 mb-lg-0" data-aos="fade-right">
                            <video src="/images/vd.mp4" autoPlay muted style={{ height: '700px' }}></video>
                        </div>
                        {items && items.filter((item, idx) => idx==8 || idx==9).map(item => {
                            return(
                                <div key={item._id} className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0 mt-5" data-aos="fade-left">
                            <a className="product-item" href="cart.html">
                                <img src={`/images_db/${item.images[0]}`} className="img-fluid product-thumbnail" alt="Product 2" />
                                <h3 className="product-title">{item.title}</h3>
                                <div>
                                    <strong className="product-price">{item.price}</strong>
                                </div>
                                <span className="icon-cross">
                                    <img src={addCircle} className="img-fluid" alt="Cross" />
                                </span>
                            </a>
                        </div>
                            )

                        })}

                    </div>
                </div>
            </div>

        </div>
    );
};
export default HomePage;
