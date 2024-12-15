'use client'
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Club(){
    return(
<main className="overflow-hidden">
  <Navbar />
  <div className="flex flex-col md:flex-row ml-5 md:ml-20 justify-between items-center py-5 md:py-10">
  <div className="flex flex-col md:flex-row px-4 md:px-20 justify-between items-center py-10 md:py-20">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold mb-2 text-center md:text-left">
          Faces of Our Vibrant <br></br>Community
          </h1>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-lg text-gray-950 text-center md:text-right">
          From athletics to cultural fests, it empowers students to explore their passions beyond academics.
          </p>
        </div>
      </div>
  </div>  
    <div className="max-w-full md:max-w-3xl mx-auto p-4 space-y-6 text-gray-800">
      {/* Patron */}
      <div className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-4">
        <p className="font-semibold md:w-1/4 text-left md:text-right">Patron</p>
        <p className="md:w-3/4">Prof.(Dr). Satyajit Chakrabarti</p>
      </div>
      <hr className="border-t border-gray-300" />

      {/* Vice Patron */}
      <div className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-4">
        <p className="font-semibold md:w-1/4 text-left md:text-right">Vice Patron</p>
        <div className="md:w-3/4 space-y-1">
          <p>Prof.(Dr). Satyajit Chakrabarti</p>
          <p>Prof. (Dr). Arun Kumar Bar</p>
          <p>Prof. (Dr). Biswajoy Chatterjee</p>
        </div>
      </div>
      <hr className="border-t border-gray-300" />

      {/* President */}
      <div className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-4">
        <p className="font-semibold md:w-1/4 text-left md:text-right">President</p>
        <p className="md:w-3/4">Prof. (Dr). Sanghamitra Poddar</p>
      </div>
      <hr className="border-t border-gray-300" />

      {/* Faculty Members */}
      <div className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-4">
        <p className="font-semibold md:w-1/4 text-left md:text-right">Faculty Members</p>
        <div className="md:w-3/4 space-y-1">
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
  <Footer />
</main>

    )  
}
    