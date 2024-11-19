 import Image from 'next/image';
 

interface Category {
    title: string;
    imageUrl: string;
    productsCount?: number;
}

const categories: Category[] = [
    { title: 'CLOCKS', imageUrl: '/image/1.jpg', productsCount: 12 },
    { title: 'LIGHTING', imageUrl: '/image/2.jpg', productsCount: 20 },
    { title: 'FURNITURE', imageUrl: '/image/3.jpg', productsCount: 33 },
    { title: 'ACCESSORIES', imageUrl: '/image/4.jpg', productsCount: 45 },
    { title: 'COOKING', imageUrl: '/image/5.jpg', productsCount: 8 },
];

export default function CategoryGrid() {
    return (
        <section className="py-6 px-6">
            <div className="flex overflow-x-auto gap-6">
                {categories.map((category, index) => (
                    <div key={index} className="group relative min-w-[250px]">
                        {/* Image Container */}
                        <div className="relative overflow-hidden">
                            <Image
                                src={category.imageUrl}
                                alt={category.title}
                                width={400}
                                height={400}
                                className="object-cover h-[300px] w-full transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                            />
                            {/* Category Title */}
                            <h2 className="absolute inset-0 flex items-end p-6 z-10 text-3xl font-bold text-gray-800 transform transition-transform duration-300 ease-in-out group-hover:translate-y-[-30px]">
                                {category.title}
                            </h2>
                            {/* Optional Product Count */}
                            {category.productsCount && (
                                <span className="absolute inset-0 flex items-end p-6 text-md text-gray-500 opacity-0 group-hover:opacity-100 transform transition-transform duration-300 ease-in-out group-hover:translate-y-[-10px] mt-2">
                                    {category.productsCount} products
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
