import React from 'react'
import HomeBanner from '../components/HomeBanner';

const ErrorPage = () => {
    return (
        <div>
            <HomeBanner />
            <div className="control">
                <img className=" object-contain" alt="" src="/team1.png" />
                <div className="capitalize font-semibold text-center font-xxl">
                    SORRY, YOU LANDED ON THE WRONG PAGE. CHECK THE NAVIGATION BAR MIGHT BE MORE HELPFUL!
                </div>
            </div>
        </div>
    )
}

export default ErrorPage;