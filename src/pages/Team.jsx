// import React from 'react';
// import HomeBanner from '../components/HomeBanner';

// const Team = () => {
//     return (
//         <div className=" overflow-hidden text-left  text-black font-alex-brush">
//             <HomeBanner/>
//             <span>
//           <h1>Our Team</h1>
//         </span>
//             {/*<div className=" tracking-[0.02em] capitalize font-alegreya  ">*/}
//             {/*    <h1>Home/Team</h1>*/}
//             {/*</div>*/}

//             <div className="control-row mb-5 ml-20">
//                 <div className="control-column  mr-5">
//                     <img className=" object-contain" alt="" src="/team2.png"/>
//                     <div className="capitalize font-semibold text-center">
//                         Sarah watson
//                     </div>
//                     <div className=" text-base tracking-[0.02em]  capitalize font-medium font-roboto text-center">Nail
//                         & Skin Care specialist
//                     </div>
//                 </div>
//                 <div className="control-column mr-4 -mt-11">
//                     <img className=" object-contain" alt="" src="/team1.png"/>
//                     <div className="capitalize font-semibold text-center">
//                         Jack Wilson
//                     </div>
//                     <div
//                         className=" text-base tracking-[0.02em]  capitalize font-medium font-roboto text-center">Haircut
//                         & Massage Specialist
//                     </div>
//                 </div>
//                 <div className="control-column -mt-11">
//                     <img className=" object-contain" alt="" src="/team3.png"/>
//                     <div className="capitalize font-semibold text-center">
//                         David Barnes
//                     </div>
//                     <div
//                         className=" text-base tracking-[0.02em]  capitalize font-medium font-roboto text-center">Haircut
//                         Specialist
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Team;
import React from 'react';
import HomeBanner from '../components/HomeBanner';

const Team = () => {
    return (
        <div className="overflow-hidden text-left text-black font-alex-brush">
            <HomeBanner/>
            <h1 className="text-2xl font-semibold mb-8">Our Team</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                    <img className="w-full h-62 object-cover mb-4" alt="" src="/team2.png"/>
                    <div className="capitalize font-semibold text-lg mb-1">Sarah Watson</div>
                    <div className="text-base font-medium">Nail & Skin Care Specialist</div>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-full h-62 object-cover mb-4" alt="" src="/team1.png"/>
                    <div className="capitalize font-semibold text-lg mb-1">Jack Wilson</div>
                    <div className="text-base font-medium">Haircut & Massage Specialist</div>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-full h-62 object-cover mb-4" alt="" src="/team3.png"/>
                    <div className="capitalize font-semibold text-lg mb-1">David Barnes</div>
                    <div className="text-base font-medium">Haircut Specialist</div>
                </div>
            </div>
        </div>
    );
};

export default Team;

