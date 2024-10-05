import React from 'react';
import HomeBanner from '../components/HomeBanner';

const Home = () => {
  return (
      <div className="w-full  overflow-hidden text-left text-mini text-black font-fira-sans">
        <HomeBanner />
        <div className="capitalize font-alex-brush text-secondcolor text-center text-xl">
          <h1>What Customers Say About Us</h1>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:mx-[200px] gap-8 mt-8 p-8">
          <div className="bg-white rounded-lg p-6 shadow-md w-[350px]">
            <img
                className="w-full h-48 object-cover rounded-lg mb-4"
                alt=""
                src="/testimonial1.webp"
            />
            <p className="text-sm mb-4">
              My stylist, Sarah, was an absolute gem! She took the time to listen to
              my hair concerns and understand the look I wanted to achieve. She
              asked insightful questions about my hair texture, styling routine, and
              lifestyle to ensure that the haircut would suit me perfectly.
            </p>
            <p className="text-xs">Rating: ⭐⭐⭐⭐
              
            </p>
          </div>


          <div className="bg-white rounded-lg p-6 shadow-md w-[350px]">
            <img
                className="w-full h-48 object-cover rounded-lg mb-4"
                alt=""
                src="/testimonial2.jpg"
            />
            <p className="text-sm mb-4">
              Walking into StyleSavvy Salon, we were greeted warmly by the hair
              stylist David, and the salon had a welcoming and kid-friendly
              atmosphere. My son Ethan immediately felt at ease with the playful
              decor and the friendly demeanor of the staff, which set a positive
              tone for the haircut.
            </p>
            <p className="text-xs">
              Rating: ⭐⭐⭐⭐⭐
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md w-[350px]">
            <img
                className="w-full h-48 object-cover rounded-lg mb-4"
                alt=""
                src="/testimonial3.jpg"
            />
            <p className="text-sm mb-4">
              I highly recommend StyleSavvy for men's haircuts. The professionalism,
              skill, and attention to detail displayed by Jack and the entire team
              make it the go-to destination for anyone seeking a top-notch haircut
              experience. I'll definitely be returning for future haircuts
            </p>
            <p className="text-xs">
              Rating: ⭐⭐⭐⭐⭐
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md w-[350px]">
            <img
                className="w-full h-48 object-cover rounded-lg mb-4"
                alt=""
                src="/testimonial4.webp"
            />
            <p  className="text-sm mb-4">
              My nail artist, Sarah was a true artist! She took the time to listen
              to my nail art ideas and preferences, offering valuable suggestions
              and creative insights along the way. Her passion for her craft was
              evident. I am very happy with her services and highly recommended.
            </p>
            <p className="text-xs">
              Rating: ⭐⭐⭐⭐⭐
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md w-[350px]">
            <img
                className="w-full h-48 object-cover rounded-lg mb-4"
                alt=""
                src="/testimonial5.jpg"
            />
            <p className="text-sm mb-4">
              The final result was beyond my expectations! Lily's hair looked
              absolutely adorable, and she couldn't stop smiling when she saw
              herself in the mirror. Sarah even gave her some cute hair accessories
              as a special treat, which made Lily feel like a princess. I highly recommended.
            </p>
            <p className="text-xs">
              Rating: ⭐⭐⭐⭐⭐
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md w-[350px]">
          <img
                className="w-full h-48 object-cover rounded-lg mb-4"
                alt=""
                src="/spaservices.png"
            />
            <p className="text-sm mb-4">
            Katie provided exceptional service during my recent spa treatment, displaying professionalism, expertise, and a genuine commitment to my comfort. Their personalized approach and attention to detail created a relaxing and memorable experience, leaving me feeling refreshed and valued as a customer.
            </p>
            <p className="text-xs">
              Rating: ⭐⭐⭐⭐⭐
            </p>
          </div>
        </div>

      </div>
  );
};
export default Home;
