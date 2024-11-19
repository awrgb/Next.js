"use client";
import React, { useState, useEffect } from "react";

// Product Card Component
interface ProductProps {
    image: string;
    title: string;
    category: string;
    price: number;
}

const ProductCard: React.FC<ProductProps> = ({ image, title, category, price }) => {
    return (
        <div className="bg-white md:p-6 lg:p-8">
            <img src={image} alt={`Image of ${title}`} className="w-full h-auto object-cover mb-4" />
            <h3 className="text-lg font-semibold text-center text-[#333333]">{title}</h3>
            <p className="text-sm text-center text-[#A5A5A5]">{category}</p>
            <p className="font-bold text-center text-[#43B02A]">${price.toFixed(2)}</p>
        </div>
    );
};

// Define valid category types
type CategoryType = "NEW" | "FEATURED" | "TOP_RATED";

// Product List Component
const ProductList: React.FC = () => {
    const [category, setCategory] = useState<CategoryType>("NEW");
    const [products, setProducts] = useState<ProductProps[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    // Mock products for different categories
    const allProducts: Record<CategoryType, ProductProps[]> = {
        NEW: [
            { image: '/elec/1.jpg', title: 'Convallis mattis parturient', category: 'Electronics', price: 199.00 },
            { image: '/elec/2.jpg', title: 'Condimentum donec turpis', category: 'Electronics', price: 209.00 },
            { image: '/elec/3.jpg', title: 'Lorem ipsum dolor sit', category: 'Electronics', price: 219.00 },
            { image: '/elec/4.jpg', title: 'Amet consectetur adipiscing', category: 'Electronics', price: 229.00 },
            { image: '/elec/5.jpg', title: 'Sed do eiusmod tempor', category: 'Electronics', price: 239.00 },
            { image: '/elec/6.jpg', title: 'Ut enim ad minim veniam', category: 'Electronics', price: 249.00 },
            { image: '/elec/7.jpg', title: 'Quis nostrud exercitation', category: 'Electronics', price: 259.00 },
            { image: '/elec/8.jpg', title: 'Nostrud exercitation ullamco', category: 'Electronics', price: 269.0 },
        ],
        FEATURED: [

            { image: '/fea/1.jpg', title: 'Convallis mattis parturient', category: 'Electronics', price: 199.00 },
            { image: '/fea/2.jpg', title: 'Condimentum donec turpis', category: 'Electronics', price: 209.00 },
            { image: '/fea/3.jpg', title: 'Lorem ipsum dolor sit', category: 'Electronics', price: 219.00 },
            { image: '/fea/4.jpg', title: 'Amet consectetur adipiscing', category: 'Electronics', price: 229.00 },
            { image: '/fea/5.jpg', title: 'Sed do eiusmod tempor', category: 'Electronics', price: 239.00 },
            { image: '/fea/6.jpg', title: 'Ut enim ad minim veniam', category: 'Electronics', price: 249.00 },
            { image: '/fea/7.jpg', title: 'Quis nostrud exercitation', category: 'Electronics', price: 259.00 },
            { image: '/fea/8.jpg', title: 'Nostrud exercitation ullamco', category: 'Electronics', price: 269.0 },
        ],
        TOP_RATED: [
            { image: '/top/1.jpg', title: 'Convallis mattis parturient', category: 'Electronics', price: 199.00 },
            { image: '/top/2.jpg', title: 'Condimentum donec turpis', category: 'Electronics', price: 209.00 },
            { image: '/top/3.jpg', title: 'Lorem ipsum dolor sit', category: 'Electronics', price: 219.00 },
            { image: '/top/4.jpg', title: 'Amet consectetur adipiscing', category: 'Electronics', price: 229.00 },
            { image: '/top/5.jpg', title: 'Sed do eiusmod tempor', category: 'Electronics', price: 239.00 },
            { image: '/top/6.jpg', title: 'Ut enim ad minim veniam', category: 'Electronics', price: 249.00 },
            { image: '/top/7.jpg', title: 'Quis nostrud exercitation', category: 'Electronics', price: 259.00 },
            { image: '/top/8.jpg', title: 'Nostrud exercitation ullamco', category: 'Electronics', price: 269.0 },
        ],
    };

    // Simulate data fetching
    useEffect(() => {
        setLoading(true);
        // Simulating API call
        setTimeout(() => {
            setProducts(allProducts[category]);
            setLoading(false);
        }, 1000); // Simulate 1 second of loading time
    }, [category]);

    return (
        <div className="py-4 md:py-8 px-4 md:px-6 lg:px-8">
            <h2 className="text-[20px] md:text-[22px] text-[#242424] font-medium text-center mb-6">
                OUR PRODUCTS
            </h2>
            <div className="flex justify-center space-x-6 mb-6">
                <button
                    onClick={() => setCategory('NEW')}
                    className={`text-[16px] md:text-[18px] ${category === 'NEW' ? 'text-black border-b-2 border-[#43B02A]' : 'text-[#A5A5A5]'}`}
                >
                    NEW
                </button>
                <button
                    onClick={() => setCategory('FEATURED')}
                    className={`text-[16px] md:text-[18px] ${category === 'FEATURED' ? 'text-black border-b-2 border-[#43B02A]' : 'text-[#A5A5A5]'}`}
                >
                    FEATURED
                </button>
                <button
                    onClick={() => setCategory('TOP_RATED')}
                    className={`text-[16px] md:text-[18px] ${category === 'TOP_RATED' ? 'text-black border-b-2 border-[#43B02A]' : 'text-[#A5A5A5]'}`}
                >
                    TOP RATED
                </button>
            </div>


            {/* Loading Spinner */}
            {loading ? (
                <div className="flex justify-center items-center py-10">
                    <div className="spinner-border animate-spin inline-block w-8 h-8 border-2 rounded-full border-gray-500 border-t-transparent"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {products.map((product, index) => (
                        <ProductCard key={index} image={product.image} title={product.title} category={product.category} price={product.price} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductList;
