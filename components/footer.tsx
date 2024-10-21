// components/Footer.tsx  
import React from 'react';  
  
const Footer: React.FC = () => {  
  return (  
    <footer className="bg-black text-white rounded-lg py-4">  
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">  
        <div className="text-center md:text-left">  
          <h1 className="text-lg font-bold">Gymkhana.</h1>  
          <p className="mt-2">  
            Y2, EP Block, Sector V,<br />  
            Bidhannagar, Kolkata,<br />  
            West Bengal 700091.  
          </p>  
        </div>  
        <div className="mt-4 md:mt-0">  
          <h2 className="font-semibold">Contact</h2>  
          <p>Student Head - 3243242432</p>  
          <p>Faculty Head - 3243242432</p>  
          <p>Fax - 12313</p>  
          <p>Telephone - 033-123213</p>  
        </div>  
      </div>  
      <div className="text-start mt-4">  
        <p>© Copyright reserved 2025</p>  
      </div>  
    </footer>  
  );  
};  
  
export default Footer;  
