   const ProductGrid = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 py-4">
                <div className="relative w-full h-full bg-blue-600 col-span-1 sm:col-span-1 md:col-span-2">
                    <span className="absolute inset-0 flex items-end justify-start p-6 text-white font-bold bg-cover bg-center" style={{ backgroundImage: "url(/Categories/1.jpg)" }}>Overlay Text 1</span>
                </div>
                <div className="relative w-full h-full bg-blue-900">
                    <span className="absolute inset-0 flex items-center justify-center text-white font-bold bg-cover bg-center" style={{ backgroundImage: "url(/Categories/2.jpg)" }}>Overlay Text 2</span>
                </div>
                <div className="relative w-full h-full bg-blue-900">
                    <span className="absolute inset-0 flex items-center justify-center text-white font-bold bg-cover bg-center" style={{ backgroundImage: "url(/Categories/3.jpg)" }}>Overlay Text 3</span>
                </div>
                <div className="relative w-full h-full bg-blue-600">
                    <span className="absolute inset-0 flex items-center justify-center text-white font-bold bg-cover bg-center" style={{ backgroundImage: "url(/Categories/4.jpg)" }}>Overlay Text 4</span>
                </div>
                <div className="relative w-full h-full bg-blue-600 col-span-1 sm:col-span-1 md:col-span-2">
                    <span className="absolute inset-0 flex items-center justify-center text-white font-bold bg-cover bg-center" style={{ backgroundImage: "url(/Categories/5.jpg)" }}>Overlay Text 5</span>
                </div>
                <div className="relative w-full h-full bg-blue-900">
                    <span className="absolute inset-0 flex items-center justify-center text-white font-bold bg-cover bg-center" style={{ backgroundImage: "url(/Categories/6.jpg)" }}>Overlay Text 6</span>
                </div>
            </div>
        </>
    )
}

export default ProductGrid;
