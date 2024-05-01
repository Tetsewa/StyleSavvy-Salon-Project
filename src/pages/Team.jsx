import React from 'react';
import HomeBanner from '../components/HomeBanner';
const Team = () => {
    return (
        <div className="overflow-hidden text-left ml-4 text-black font-alex-brush">
            <HomeBanner/>
            <h1 className="text-2xl font-semibold mb-8 text-center">Our Team</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                    <img className="w h-62 object-cover mb-4" alt="" src="/team2.png"/>
                    <div className="capitalize font-semibold text-lg mb-1">Sarah Watson</div>
                    <div className="text-base font-medium">Nail & Skin Care Specialist</div>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w- h-64 object-cover mb-4" alt="" src="/team1.png"/>
                    <div className="capitalize font-semibold text-lg mb-1">Jack Wilson</div>
                    <div className="text-base font-medium">Haircut & Massage Specialist</div>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w h-64 object-cover mb-4" alt="" src="/team3.png"/>
                    <div className="capitalize font-semibold text-lg mb-1">David Barnes</div>
                    <div className="text-base font-medium">Haircut Specialist</div>
                </div>
            </div>
        </div>
    );
};
export default Team;
