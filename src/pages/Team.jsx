import React from 'react';
import HomeBanner from '../components/HomeBanner';
const Team = () => {
    return (
        <div className=" overflow-hidden text-left  text-black font-alex-brush">
            <HomeBanner/>
            <h1 className="text-6xl bg-font-semibold mb-10 text-secondcolor text-center ">Meet Our Team</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:mx-[300px]">
                <div className="bg-white flex flex-col items-center mb-4 w-80 h-150 pt-2 rounded-lg">
                    <img className="w h-62 object-cover mb-4" alt="" src="/team2.png"/>
                    <div className="capitalize font-semibold text-lg mb-1">Sarah Watson</div>
                    <div className="text-base font-medium">Nail & Skin Care Specialist</div>
                </div>
                <div className="bg-white flex flex-col items-center mb-4 w-80 h-140 pt-2 rounded-lg ">
                    <img className="w- h-64 object-cover mb-4" alt="" src="/team1.png"/>
                    <div className="capitalize font-semibold text-lg mb-1">Jack Wilson</div>
                    <div className="text-base font-medium">Haircut & Massage Specialist</div>
                </div>
                <div className="bg-white flex flex-col items-center mb-4 w-80 h-140 pt-2 rounded-lg ">
                    <img className="w h-64 object-cover mb-4" alt="" src="/team3.png"/>
                    <div className="capitalize font-semibold text-lg mb-1">David Barnes</div>
                    <div className="text-base font-medium">Haircut Specialist</div>
                </div>
                <div className="bg-white flex flex-col items-center mb-4 w-80 h-140 pt-2 rounded-lgr">
                    <img className="w h-64 object-cover mb-4" alt="" src="/team4.png"/>
                    <div className="capitalize font-semibold text-lg mb-1">Katie Lindsey</div>
                    <div className="text-base font-medium">Skin and Hair Specialist</div>
                </div>
            </div>
        </div>
    );
};
export default Team;
