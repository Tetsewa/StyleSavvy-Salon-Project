const Footer = () => {
  return (
    <div className="w-full flex relative bg-white h-[528px]  text-left text-xl text-black font-fira-sans">
      <div className="flex top-[0px] left-[0px] bg-gainsboro w-[1110px] h-[528px]" />
      <div className="flex top-[104px] left-[747px] w-[314px] h-80">
        <div className="flex top-[0px] left-[14px] tracking-[0.02em] inline-block w-[300px] h-80">
          <p className="m-0">
            <span className="text-mini font-fira-sans whitespace-pre-wrap">{`     `}</span>
            <b>Salon Opening Hours</b>
          </p>
          <p className="m-0 text-mini">
            <span className="whitespace-pre-wrap">
              <span>&nbsp;</span>
            </span>
          </p>
          <p className="m-0">
            <span className="whitespace-pre-wrap">
              <span>
                Monday: 9:00 AM - 6:00 PMTuesday: 9:00 AM - 6:00 PMWednesday:
                9:00 AM - 6:00 PMThursday: 9:00 AM - 8:00 PMFriday: 9:00 AM -
                8:00 PMSaturday: 9:00 AM - 5:00 PMSunday: Closed
              </span>
            </span>
          </p>
          <p className="m-0">
            <span className="whitespace-pre-wrap">
              <span>&nbsp;</span>
              <span className="font-semibold font-fira-sans">{`Note: `}</span>
            </span>
          </p>
          <p className="m-0">
            <span className="whitespace-pre-wrap">
              <span>
                Please note that our salon may have adjusted opening hours on
                public holidays or special occasions. We recommend calling ahead
                to confirm availability.
              </span>
            </span>
          </p>
        </div>
        <img
          className="flex top-[0px] left-[0px] w-[27px] h-[27px] object-cover"
          alt=""
          src="/image-1@2x.png"
        />
      </div>
      <div className="flex top-[104px] left-[418px] tracking-[0.02em] inline-block w-[154px] h-[119px] text-mini">
        <p className="m-0 whitespace-pre-wrap text-xl">
          <b>Contact Us</b>
        </p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0 whitespace-pre-wrap"> +312564855622</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0 whitespace-pre-wrap"> info@stylesavvy.nl</p>
      </div>
      <img
        className="flex top-[159px] left-[405px] w-[27px] h-[27px] object-cover"
        alt=""
        src="/image-2@2x.png"
      />
      <img
        className="flex top-[204px] left-[405px] w-[27px] h-[19.4px] object-cover"
        alt=""
        src="/image-3@2x.png"
      />
      <div className="flex top-[104px] left-[80px] w-[168px] h-[119px] text-mini">
        <div className="flex top-[0px] left-[14px] tracking-[0.02em] inline-block w-[154px] h-[119px]">
          <p className="m-0 text-xl">
            <span className="font-fira-sans">
              <span className="text-mini whitespace-pre-wrap">{`     `}</span>
            </span>
            <span>
              <span className="font-fira-sans">{` `}</span>
              <b>Address</b>
            </span>
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">AB Crescent 4,</p>
          <p className="m-0">9852 AB,</p>
          <p className="m-0">Amsterdam</p>
        </div>
        <img
          className="flex top-[0px] left-[0px] w-[27px] h-[27px] object-cover"
          alt=""
          src="/image-1@2x.png"
        />
      </div>
      <div className="flex top-[264px] left-[405px] w-10 h-10 text-center text-white font-fontawesome">
        <div className="flex top-[0px] left-[0px] rounded bg-darkslategray w-10 h-10" />
        <div className="flex top-[3px] left-[18px] tracking-[0.01em] leading-[32px] lowercase inline-block w-[8.9px] h-[23.7px]">
          
        </div>
      </div>
      <div className="flex top-[264px] left-[486px] w-10 h-10 text-center text-[22px] text-white font-fontawesome">
        <div className="flex top-[0px] left-[0px] rounded bg-darkslategray w-10 h-10" />
        <div className="flex top-[3px] left-[10px] tracking-[0.01em] leading-[32px] lowercase inline-block w-[20.7px] h-[23.7px]">
          
        </div>
      </div>
      <div className="flex top-[264px] left-[567px] w-10 h-10 text-center text-white font-fontawesome">
        <div className="flex top-[0px] left-[0px] rounded bg-darkslategray w-10 h-10" />
        <div className="flex top-[3px] left-[13px] tracking-[0.01em] leading-[32px] lowercase inline-block w-[14.8px] h-[23.7px]">
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
/*import React from "react";
const Footer = () => {
  return (
<div className="footer">
          <div className="footMenu">
            Opening Hours
            <div className="footInfo">
              Monday 9am to 5pm <br />
              Tuesday 9am to 5pm
              <br />
              Wednesday 9am to 5pm <br />
              Thursday 9am to 5pm
              <br />
              Friday 9am to 5pm
            </div>
          </div>
          <div className="footMenu">
            location
            <div className="footInfo">
              2145 yG, Amsterdam
              <br /> Netherlands
            </div>
          </div>
          <div className="footMenu">
            CONTACT
            <div className="footInfo">
              tel: +3168744663 <br />
              email: info@stylesavvysalon.com
            </div>
          </div>
</div>
  );
}
export default Footer;*/
