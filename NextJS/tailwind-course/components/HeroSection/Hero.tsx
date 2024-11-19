import React from 'react'

const HeroSection = () => {
    return (
        <div className='min-h-screen bg-gradient-to-br from-purple-50 via-orange-50 to-transparent'>
            <div className='max-w-4xl mx-auto px-6 pb-32 flex flex-col'>
                <div className='flex my-6 gap-2 '>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full border-yellow-600">
                        <p>v0.21.1  <span>Find-in-page fixes</span></p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
