import React from 'react';

const About = () => {
  return (
     <section className ="about h-screen flex items-center justify-start bg-cover bg-center text-white px-10" style={{ backgroundImage:"url('/w6.jpeg')"}}> 
        <div className ="bg-black bg-opacity-60 p-8 rounded-md max-w-lg">
          <h2 className ="text-4xl font-bold mb-4" data-aos="fade-up">About Us</h2>
          <p>At TimeCrafter , we are passionate about time and craftsmanship. Offering a curated collection of premium watches, we bring you the perfect blend of elegance, precision, and innovation. Whether you&apos;re seeking a timeless classic or a modern masterpiece, our handpicked selection caters to every style and occasion. Discover watches that do not just tell time they tell your story.</p>
        </div>
     </section>
  );
};

export default About;