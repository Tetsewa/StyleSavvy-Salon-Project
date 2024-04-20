/*import React from 'react'

function Team() {
    return (
        <div>

        </div>
    )
}

export default Team*/
const Team = () => {
    return (
      <div className=" overflow-hidden text-left  text-black font-alex-brush">
        <img
          className=" object-cover"
          alt=""
          src="/parallaxbackgroundwithhairsaloninterior-10779113827-1@2x.png"
        />
        <div className=" tracking-[0.02em] capitalize  ">
          Our Team
        </div>
        <div className=" tracking-[0.02em] capitalize font-alegreya  ">
          Home/Team
        </div>
        <div className="space-x-20 bg-oldlace">
           <div className="inline-block w-[218px] h-[186px]" > 
            
            <img
              className=" object-contain"
              alt=""
              src="/team2.png"
            />
              <div className="rounded-t-none rounded-b-3xs bg-oldlace " />
              <div className=" tracking-[0.02em]  capitalize font-semibold  ">
                Sarah watson
              </div>
              <div className=" text-base tracking-[0.02em] leading-[30px] capitalize font-medium font-roboto inline-block w-[226.6px] h-[18.1px] opacity-[0.6]">{`Nail & Skin Care specialist`}</div>
            </div>
            
          
          <div className="inline-block w-[218px] h-[186px]" >
            <img
              className=" object-cover"
              alt=""
              src="/team1.png"
            />
            <div >
              <div className=" rounded-t-none rounded-b-3xs bg-oldlace " />
              <div className=" tracking-[0.02em]  capitalize font-semibold inline-block ">
                Jack Wilson
              </div>
              <div className=" text-base tracking-[0.02em]  capitalize font-medium font-roboto inline-block ">haircut & Massage specialist</div>
            </div>
          </div>
          <div className="inline-block w-[218px] h-[186px]">
            <img
              className="object-cover"
              alt=""
              src="/team3.png"
            />
            <div>
              {/* <div className=" rounded-t-none rounded-b-3xs bg-oldlace " /> */}
             <div> 
             <div className=" tracking-[0.02em]  capitalize font-semibold inline-block ">
                <b>David Barnes</b>
              </div>
              </div>
              <div className=" capitalize font-medium font-roboto inline-block ">
                haircut specialist
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Team;
  
