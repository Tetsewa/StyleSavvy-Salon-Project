import React from 'react'
import ReactDOM from 'react-dom'
import { SocialIcon } from 'react-social-icons'

export default function Footer() {
    return (
        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gray-300">
            <div className="p-3 ">
                <h3>
                    <b>Salon Opening Hours</b>
                </h3>
                <p>
                    Monday to Friday: 9:00 AM - 6:00 PM <br />
                    Saturday: 9:00 AM - 5:00 PM <br />
                    Sunday: Closed
                </p>

                <span>
                    <b>Note:</b>Please note that our salon may have adjusted opening hours on
                    public holidays or special occasions. We recommend calling ahead
                    to confirm availability.
                </span>
            </div>

            <div className="text-mini p-3 pl-6 pt-6">
                <div className="tracking-[0.02em] inline-block justify-center">
                    <p className="m-0 text-xl">

                        <img
                            className="top-[0px] left-[0px] w-[27px] h-[27px] object-cover"
                            alt=""
                            src="/image-1@2x.png"
                        />
                        <span>
                            <b>Address</b>
                        </span>
                    </p>

                    <p className="m-0">AB Crescent 4,</p>
                    <p className="m-0">9852 AB,</p>
                    <p className="m-0">Amsterdam</p>
                </div>

            </div>

            <div className="p-3">

                <h3>
                    <b>Contact Us</b>

                </h3>

                <div className="m-0 whitespace-pre-wrap m-3">
                    <img
                        className="w-[20px] h-[20px] object-cover p-1 pb-0"
                        alt=""
                        src="/image-2@2x.png"
                    />
                    +312564855622
                </div>

                <div className="m-0 whitespace-pre-wrap m-3">
                    <img
                        className="w-[20px] h-[15.4px] object-cover p-1 pb-0"
                        alt=""
                        src="/image-3@2x.png"
                    /> info@stylesavvy.nl
                </div>
                <div className="space-x-5">
                    <SocialIcon url="https://twitter.com" />
                    <SocialIcon url="https://facebook.com" />
                    <SocialIcon url="https://instagram.com" />
                    <SocialIcon url="https://youtube.com" />


                </div>
            </div>

        </footer>
    )


}