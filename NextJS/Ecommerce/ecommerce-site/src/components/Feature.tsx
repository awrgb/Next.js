import React from 'react';

interface FeatureProps {
    icon: string; // Now the icon is a string representing the image URL
    title: string;
    description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col items-center text-center space-y-2">
            <img src={icon} alt={title} className="w-16 h-16" /> {/* Image rendering */}
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="text-lg text-gray-500">{description}</p>
        </div>
    );
};

const FeaturesSection: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-8 bg-white">
            <Feature
                icon="/2.svg" // Replace with your image path
                title="FREE SHIPPING"
                description="Fast and reliable delivery"
            />
            <Feature
                icon="/3.svg" // Replace with your image path
                title="50 DAYS RETURN"
                description="Consumer protection program"
            />
            <Feature
                icon="/4.svg" // Replace with your image path
                title="24/7 SUPPORT"
                description="If you have any questions"
            />
            <Feature
                icon="/5.svg" // Replace with your image path
                title="BEST QUALITY"
                description="Many years on the market"
            />
        </div>
    );
};

export default FeaturesSection;
