'use client'
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Club(){
    return <div>
        <Navbar/>
        <div className="flex flex-row ml-20 justify-between items-center py-10">
        <div className="md:flex-1 flex justify-center md:justify-start">
          <h1 className="text-5xl font-bold mb-2">
          Faces of Our Vibrant 
            <br className="hidden md:inline" />
            Community
          </h1>
        </div>
        <div className="md:flex-1 flex flex-col justify-evenly md:items-start">
          <p className="text-sm text-gray-950 text-center md:text-left">
          From athletics to cultural fests, it empowers students 
            <br className="hidden md:inline" />
            to explore their passions beyond academics.
          </p>
        </div>
      </div>
      <div>
      <div className="max-w-3xl mx-auto p-4 space-y-6 text-gray-800">
      {/* Patron */}
      <div className="flex items-start space-x-4">
        <p className="font-semibold w-1/4 text-right">Patron</p>
        <p className="w-3/4">Prof.(Dr). Satyajit Chakrabarti</p>
      </div>
      <hr className="border-t border-gray-300" />

      {/* Vice Patron */}
      <div className="flex items-start space-x-4">
        <p className="font-semibold w-1/4 text-right">Vice Patron</p>
        <div className="w-3/4 space-y-1">
          <p>Prof.(Dr). Satyajit Chakrabarti</p>
          <p>Prof. (Dr). Arun Kumar Bar</p>
          <p>Prof. (Dr). Biswajoy Chatterjee</p>
        </div>
      </div>
      <hr className="border-t border-gray-300" />

      {/* President */}
      <div className="flex items-start space-x-4">
        <p className="font-semibold w-1/4 text-right">President</p>
        <p className="w-3/4">Prof. (Dr). Sanghamitra Poddar</p>
      </div>
      <hr className="border-t border-gray-300" />

      {/* Faculty Members */}
      <div className="flex items-start space-x-4">
        <p className="font-semibold w-1/4 text-right">Faculty Members</p>
        <div className="w-3/4 space-y-1">
          <p>Prof. (Dr). Malay Gangopadhyay</p>
          <p>Prof. (Dr). Debika Bhattacharyya</p>
          <p>Prof. (Dr). Mohuya Chakraborty</p>
          <p>Prof. Tapas Kumar Dutta</p>
          <p>Prof. Gauri Majumder</p>
          <p>Prof. Prabir Kumar Das</p>
          <p>Prof. (Dr). Koel Ganguly</p>
          <p>Prof. Gunjan Kumar</p>
          <p>Prof. Dwaipayan De</p>
          <p>Prof. Arindam Chakraborty</p>
          <p>Prof. Avijit Bose</p>
          <p>Prof. Samapika Das Biswas</p>
          <p>Prof. Amartya Mukherjee</p>
          <p>Prof. Shreyoshi Dutta</p>
          <p>Prof. Srijita Chakraborty</p>
          <p>Prof. Nikesh Kumar</p>
          <p>Prof. Rahul Baidya</p>
          <p>Prof. Ratna Chakraborty</p>
          <p>Prof. Indranil Basu</p>
          
        </div>
        
      </div>
      <hr className="border-t border-gray-300" />
    </div>
      </div>
      <div className="py-20">
        <Footer/>
      </div>
    </div>
    }
    