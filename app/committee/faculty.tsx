export default function FacultyList() {
    const professors = [
"Prof. (Dr). Malay Gangopadhyay",
"Prof. (Dr). Debika Bhattacharyya",
"Prof. (Dr). Mohuya Chakraborty",
"Prof. Tapas Kumar Dutta",
"Prof. Gauri Majumder",
"Prof. Prabir Kumar Das",
"Prof. (Dr). Koel Ganguly",
"Prof. Gunjan Kumar",
"Prof. Dwaipayan De",
"Prof. Arindam Chakraborty",
"Prof. Avijit Bose",
"Prof. Samapika Das Biswas",
"Prof. Amartya Mukherjee",
"Prof. Shreyoshi Dutta",
"Prof. Srijita Chakraborty",
"Prof. Nikesh Kumar",
"Prof. Rahul Baidya",
"Prof. Ratna Chakraborty",
"Prof. Indranil Basu",
"Prof. (Dr). Malay Gangopadhyay",
"Prof. (Dr). Debika Bhattacharyya",
"Prof. (Dr). Mohuya Chakraborty",
"Prof. Tapas Kumar Dutta",
"Prof. Gauri Majumder",
"Prof. Prabir Kumar Das",
"Prof. (Dr). Koel Ganguly",
"Prof. Gunjan Kumar",
"Prof. Dwaipayan De",
"Prof. Arindam Chakraborty",
"Prof. Avijit Bose",
"Prof. Samapika Das Biswas",
"Prof. Amartya Mukherjee",
"Prof. Shreyoshi Dutta",
"Prof. Srijita Chakraborty",
"Prof. Nikesh Kumar",
"Prof. Rahul Baidya",
"Prof. Ratna Chakraborty",
"Prof. Indranil Basu"
    ]
  
    return (
      <div className="mx-auto max-w-6xl px-40 py-8">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {professors.map((professor, index) => (
            <li 
              key={index}
              className="text-base md:text-lg leading-relaxed"
            >
              {professor}
            </li>
          ))}
        </ul>
      </div>
    )
  }
