import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white rounded-[32px] py-8 sm:py-16 px-6 sm:px-20 w-full max-w-[1401px] mx-auto my-8 sm:my-16 font-['Poppins']">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-8 sm:gap-4 mb-12 sm:mb-24">
        <div className="w-full sm:w-auto">
          <h1 className="text-3xl font-normal">Gymkhana.</h1>
          <h1 className='text-2xl '>By students of <br />
          IEM Kolkata.</h1>
        </div>
        <div className="w-full sm:w-auto space-y-4">
          <h2 className="text-2xl font-medium">Address</h2>
          <p className="text-xl font-light opacity-80 leading-relaxed">
            Y2, EP Block, Sector V,<br />
            Bidhannagar, Kolkata,<br />
            West Bengal 700091.
          </p>
        </div>
        <div className="w-full sm:w-auto space-y-4">
          <h2 className="text-2xl font-medium">Contact</h2>
          <div className="text-xl font-light opacity-80 space-y-2">
            <p>Student Head - 3243242432</p>
            <p>Faculty Head - 3243242432</p>
            <p>Fax - 12313</p>
            <p>Telephone - 033-123213</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
        <p className="text-sm font-light opacity-80 order-2 sm:order-1">© Copyright reserved 2025</p>
        <div className="flex gap-6 order-1 sm:order-2">
          <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
            <FaLinkedinIn size={20} />
          </a>
          <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}

