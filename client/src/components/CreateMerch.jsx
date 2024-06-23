import { useState } from 'react';
import axios from 'axios';
import '../styles/createMerch.css';
import { SketchPicker } from 'react-color';
const CreateMerch = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        colors: [],
        sizes: [],
        price: '',
        count: '',
        images:[],
        type:''
    });
    console.log(formData)
    console.log(formData)
    const handleColorChange = (color) => {
        const selectedColor = color.hex;

        setFormData((prevData) => ({
            ...prevData,
            colors: prevData.colors.includes(selectedColor)
                ? prevData.colors.filter((color) => color !== selectedColor)
                : [...prevData.colors, selectedColor]
        }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSizeChange = (e) => {
        const selectedSizes = Array.from(e.target.selectedOptions, (option) => option.value);

        setFormData((prevData) => ({
            ...prevData,
            sizes: selectedSizes
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("title", formData.title);
        data.append("type", formData.type);
        data.append("price", formData.price);
        data.append("description", formData.description);
        data.append("count", formData.count);
        data.append("colors", formData.colors);
        data.append("sizes", formData.sizes);
        for (let i = 0;i<formData.images.length ;i++){
            data.append('files',formData.images[i])
        }
        axios.post('http://localhost:8000/api/item',data)
        .then(result=>console.log(result))
        .catch(err=>console.log(err));
    };

    return (
        <div className='CRTM'>
            <form onSubmit={handleSubmit}>
            <h2 className="titelx">Create a Merch</h2>
                <label className="label">Title</label>
                <input
                className="inp"
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Insert title for the merch"
                />
                <label className="label1">Type</label>
                <select name="types" placeholder='type of the merch' onChange={e=>setFormData({...formData,type:e.target.value})}>
                    <option value="t-shirt">T-shirt</option>
                    <option value="mug">Mug</option>
                    <option value="keyChain">Key chain</option>
                    <option value="carCollectibles">carCollectibles</option>
                    <option value="CarMats">CarMats</option>
                    <option value="new">new</option>
                    <option value="hotWheels">hotWheels</option>
                </select>
                <label className="label1">Pictures</label>
                <input type="file" multiple max='4' className="inp" onChange={e=>setFormData({...formData,images:e.target.files})} />
                <label className="label1">Description</label>
                <textarea
                className="textt"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Put description for the merch"
                    id=""
                    cols="30"
                    rows="10"
                ></textarea>
                <label className="label1">Colors available</label>
                <SketchPicker
                    color={formData.colors.length > 0 ? formData.colors[0] : '#ffffff'}
                    onChange={handleColorChange}
                />
                <p>Selected Colors: {formData.colors.join(', ')}</p>
                <label className="label1">Sizes for the merch</label>
                <select
                    name="sizes"
                    multiple
                    value={formData.sizes}
                    onChange={handleSizeChange}
                >
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                    <option value="XXXL"></option>
                </select>
                <label>Price</label>
                <input
                className="inp"
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder='put a price'
                />
                <label className="label">Count</label>
                <input
                className="inp"
                    type="number"
                    name="count"
                    value={formData.count}
                    onChange={handleInputChange}
                    placeholder='put the quantity available for the product'
                />
                <button type="submit" className="btn4">Make the product</button>
            </form>
        </div>
    );
};

export default CreateMerch;
