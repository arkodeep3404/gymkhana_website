import React from 'react';  
  
const FeaturedEvents = () => {  
  return (  
    <div className="container mt-20 mx-auto px-4">  
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">  
        <div className="bg-gray-200 p-4"> 
        <h2 className="text-2xl font-bold mb-4">Featured Events</h2>  
      <p className="mb-8">Discover exciting events and initiatives that showcase the excellence and innovation happening at our campuses across the country.</p>  
         
          <img src="/1st_evennt.png" alt="Event 1" className="w-full h-auto" />  
        </div>  
        <div className="bg-gray-200 col-span-1 md:row-span-2 p-4">  
          <img src="/2nd_event.png" alt="Event 2" className="w-full h-full" />  
        </div>  
        <div className="bg-gray-200 p-4">  
          <img src="1st_evennt.png" alt="Event 3" className="w-full h-auto" />  
          <p className='py-5'>From academic achievements to sustainability drives, explore how colleges are shaping the future with impactful projects and collaborations.</p>  
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Explore events →</button>
        </div>  
      </div>   
    </div>  
  );  
};  
  
export default FeaturedEvents;  
