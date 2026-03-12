import Products from './Products';
import { useState } from 'react';

const ProdList = ({ products, cartItems, setCartItems }) => {
    const [searchValue, setSearchValue] = useState("");

    const filterProducts = () => {
        return products.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase()));
    };

    return (
        <>
            <form>
                <input id='search'
                    type="search"
                    placeholder="search..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </form>
            <div className='allProducts'>
                {filterProducts().map(product => (
                    <Products key={product.id} p={product} cartItems={cartItems} setCartItems={setCartItems} />
                ))}
            </div>
        </>
    );
};

export default ProdList;
