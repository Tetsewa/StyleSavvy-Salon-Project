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
          width={1200}
          height={1000}
          src="/vecteezy_beauty-salon-interior_27819575.jpg"
        />
        <span> 
          <h1>Our Team</h1>
        </span>
        <div className=" tracking-[0.02em] capitalize font-alegreya  ">
          <h1>Home/Team</h1>
        </div>
        <div className="space-x-20 bg-oldlace">
           <div className="inline-block " > 
            
            <img
              className=" object-contain"
              alt=""
              src="/team2.png"
            />
              <div className="rounded-t-none rounded-b-3xs bg-oldlace " />
              <div className=" justify-center items-center tracking-[0.02em]  capitalize font-semibold  ">
                Sarah watson
              </div>
              <div className=" text-base tracking-[0.02em]  capitalize font-medium font-roboto inline-block ">Nail & Skin Care specialist</div>
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
  
