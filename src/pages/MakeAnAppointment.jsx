import React from 'react'

/*function MakeAnAppointment() {
    return (
        <div>

        </div>
    )
}

export default MakeAnAppointment*/
const MakeAnAppointment = () => {
    return (
      <div className="w-full relative bg-white h-[1237px] overflow-hidden text-left text-base text-black font-alegreya">
        <img
          className="flex top-[83px] left-[0px] w-[1110px] h-[495px] object-cover"
          alt=""
          src="/parallaxbackgroundwithhairsaloninterior-10779113827-1@2x.png"
        />
        <div className="flex top-[298px] left-[265px] text-[64px] tracking-[0.02em] capitalize font-alex-brush inline-block w-[647px] h-[58px]">
          Make An Appointment
        </div>
        <div className="flex top-[607px] left-[0px] text-[32px] tracking-[0.02em] capitalize inline-block w-[432px] h-[84px]">
          Home/Make an Appointment
        </div>
        <div className="flex top-[717px] left-[23px] tracking-[0.02em] capitalize inline-block w-[161px] h-[35px]">
          First Name
        </div>
        <div className="flex top-[717px] left-[118px] bg-gainsboro w-[281px] h-6" />
        <div className="flex top-[717px] left-[432px] tracking-[0.02em] capitalize inline-block w-[178px] h-6">
          Last Name
        </div>
        <div className="flex top-[717px] left-[528px] bg-gainsboro w-[321px] h-6" />
        <div className="flex top-[773px] left-[25px] tracking-[0.02em] capitalize inline-block w-[207px] h-[23px]">{`Phone/Mobile Number `}</div>
        <div className="flex top-[773px] left-[196px] bg-gainsboro w-[203px] h-[23px]" />
        <div className="flex top-[776px] left-[435px] tracking-[0.02em] capitalize inline-block w-[136px] h-5">
          E-mail ID
        </div>
        <div className="flex top-[773px] left-[528px] bg-gainsboro w-[321px] h-[23px]" />
        <div className="flex top-[744px] left-[calc(50%_+_338px)] w-[94px] h-24 text-[15px] text-white font-fira-sans">
          <div className="flex top-[0px] left-[calc(50%_-_47px)] w-[91px] h-24">
            <div className="flex top-[0px] left-[calc(50%_-_8.05px)] rounded-lg bg-gray w-[53.5px] h-[28.7px]" />
            <div className="flex top-[75.71px] left-[0px] bg-white w-[15.5px] h-[20.3px]" />
          </div>
          <div className="flex top-[6.56px] left-[calc(50%_-_4.64px)] tracking-[0.02em] capitalize font-semibold inline-block w-[51.6px] h-[13.7px]">
            Next
          </div>
        </div>
      </div>
    );
  };
  
  export default MakeAnAppointment;
