import '../styles/catheg.css'
import '../styles/shop.css'
import { Link } from 'react-router-dom';
import addCircle from '/images/add_circle.svg';
import NavShop from '../components/NavShop';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Shops = ({loggedUser}) => {
    const [items, setItems] = useState(null);
    const [filtredItems, setFiltredItems] = useState(null)
    console.log(items)
    useEffect(() => {
        axios.get('http://localhost:8000/api/item').then(res => {
            setItems(res.data);
            setFiltredItems(res.data);
        }).catch(err => console.log(err));
    }, [])
    const chooseOption = option => {
        const filterdItemss = filtredItems.filter((item) => item.type === option);
        setItems(filterdItemss);
    };
    return (
        <>
        <NavShop loggedUser={loggedUser}/>
        <div className='shop-container'>
            <div className='sidebar'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input type="text" name='search' id='srch' placeholder='Search' className='form-control' style={{ width: '150px', height: '30px' }} />
                    <a href="#cart" className="icon"><img src="/images/recherch.png" alt="" /></a>
                </div>
                <button  className='button'   onClick={() => chooseOption('carAccessories')}><i className="fas fa-car"></i> Car Accessories </button>
                <button  className='button'   onClick={() => chooseOption('carCollectibles')}><i className="fas fa-car-side"></i> Car Collectibles </button>
                <button  className='button'   onClick={() => chooseOption('CarMats')} ><i className="fas fa-car"></i> Car Mats</button>
                <button  className='button'   onClick={() => chooseOption('hotWheels')}><i className="fas fa-car"></i> Hotwheels </button>
                <button  className='button'   onClick={() => chooseOption('new')} ><i className="fas fa-star"></i> New </button>
                <button  className='button'   onClick={() => chooseOption('t-shirt')}><i className="fas fa-tshirt"></i> Shirts (20)</button>
                <button  className='button'   onClick={() => chooseOption('sweater')}><i className="fas fa-snowflake"></i> Sweater (20)</button>
                <button  className='button'   onClick={() => chooseOption('teckDeck')} ><i className="fas fa-tablet"></i> Tech Deck (20)</button>
            </div>
            <div className='produit w-100'>
                {items && items.map(item => {
                    return (
                        <div className=" w-25" key={item._id}>
                            <Link to={`/shop/${item._id}`}>
                                <div className="untree_co-section product-section before-footer-section">
                                    <div className="container">
                                        <div data-aos="fade-up">
                                            <a className="product-item" href="#">
                                                <img src={`/images_db/${item.images[0]}`}className="img-fluid product-thumbnail" alt={item.title} />
                                                <h3 className="product-title">{item.title}</h3>
                                                <strong className="product-price">{item.price} dt</strong>
                                                <span className="icon-cross">
                                                    <img src={addCircle} className="img-fluid" alt="Cross" />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    );
};
export default Shops;