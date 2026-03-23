import React from 'react'

const PreHome = () => {
    return (
        <div>
            <WebPageSchema
                name=" Laiqa & Rabeel Wedding | Official Wedding Website"
                description="Welcome to the official wedding website of  Laiqa & Rabeel. Join us in celebrating our special day and explore event details, itinerary, venue information, and RSVP updates."
                url={`${Const.ClientLink}/`}
            />
            <HomeHeroSection />
            <WeddingHero />
            <Line />
            <Countdown />
            <Hearts />
            <Destiny />
            {/* <Itinerary /> */}
            {/* <FAQ /> */}
        </div>
    )
}

export default PreHome
