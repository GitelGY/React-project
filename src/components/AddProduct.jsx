import React, { useState } from 'react';

const AddProducts = ({ onAdd }) => {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [c, setC] = useState('');
    const [desc, setDesc] = useState('');
    const [img, setImg] = useState('');

    const handleNumericChange = (setter) => (e) => {
        const { value } = e.target;
        if (/^\d*$/.test(value)) {
            setter(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            id: parseInt(id),
            title,
            price,
            a,
            b,
            c,
            desc,
            img,
        };
        onAdd(newProduct);
        setId('');
        setTitle('');
        setPrice('');
        setA('');
        setB('');
        setC('');
        setDesc('');
        setImg('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add Product</h1>
            <input id="addP" required type="text" placeholder="ID" value={id} onChange={handleNumericChange(setId)} />
            <input id="addP" required type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input id="addP" required type="text" placeholder="Price" value={price} onChange={handleNumericChange(setPrice)} />
            <input id="addP" required type="text" placeholder="text 1" value={a} onChange={(e) => setA(e.target.value)} />
            <input id="addP" required type="text" placeholder="text 2" value={b} onChange={(e) => setB(e.target.value)} />
            <input id="addP"  type="text" placeholder="text 3-לא חובה" value={c} onChange={(e) => setC(e.target.value)} />
            <input id="addP" required type="text" placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)} />
            <input id="addP" required type="text" placeholder="Image URL" value={img} onChange={(e) => setImg(e.target.value)} />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProducts;