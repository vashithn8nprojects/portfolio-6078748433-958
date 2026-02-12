
export default function Home() {
  const resume = {
  "name": "Sai Varshith Pujala",
  "title": "",
  "email": "",
  "phone": "",
  "location": "",
  "summary": "SAI VARSHITH PUJALA\nGuntur, Andhra Pradesh | +91 8185985336 | saivarshith8284@gmail.com\nLinkedIn: linkedin.com/in/saivarshith-pujala | GitHub: github.com/saivarshith8284\nCAREER OBJECTIVE\nDetail-oriented Analyst Trainee with hands-on experience in full-stack web development, REST API\nintegration, databases, and AI-enabled applications. Seeking an entry-level opportunity at Deloitte\nto contribute to client-focused solutions through requirement understanding, basic testing,\ndocumentation, and continuous learning while following defined development processes.\nEDUCATION\nBachelor of Technology (B.Tech) – Computer Science & Engineering (2023–2026)\nVasireddy Venkatadri Institute of Technology | CGPA: 6.5\nDiploma – Civil Engineering (2019–2023)\nChundi Ranganayakulu Polytechnic College | Percentage: 67.26%\nSecondary Education (X) (2019)\nSantans English Medium School | CGPA: 8.7\nTECHNICAL SKILLS\nProgramming: Java, JavaScript, C\nWeb & Backend: HTML, CSS, React, Node.js, Express.js, Next.js, REST APIs\nDatabases: MongoDB, PostgreSQL\nTools & Platforms: Git, GitHub, VS Code, Postman, AWS Academy, Generative AI Tools\nBasic Testing & Process Knowledge: Unit Testing (basic), API Testing (basic), Debugging, SDLC\nBasics, Agile Awareness\nCore Competencies: Requirement Understanding, Technical Documentation, Problem Solving,\nAnalytical Thinking, Team Collaboration, Communication Skills\nPROJECTS\nUniversal AI – Full Stack AI Chat Application\n• Developed a full-stack AI chat application using Next.js and REST APIs\n• Integrated APIs, handled errors, and performed basic testing and debugging\n• Documented application flow and followed structured development steps\nRecruit AI – Intelligent Recruitment Platform\n• Designed an AI-powered recruitment platform to support candidate screening\n• Understood recruitment workflows and converted them into system features\n• Assisted in frontend-backend integration and basic API testing\nNutriLens AI – Smart Nutrition Analysis System\n• Built an AI-based nutrition analysis application to evaluate food intake\n• Integrated APIs and verified application outputs through basic testing\n• Performed simple data interpretation to generate user-friendly insights\nCERTIFICATIONS\n• AWS Academy Graduate (2025)\n• Google Analytics Certification (2025)\n• Cybersecurity – EDU Skills (2024–2025)\nADDITIONAL DETAILS\n• Good written and verbal communication skills\n• Self-motivated, adaptable, and eager to learn\n• Open to relocation and flexible with work schedules",
  "skills": [],
  "experience": [],
  "education": [],
  "projects": [],
  "links": {}
};

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-16">

        <section className="text-center space-y-4">
          <h1 className="text-5xl font-bold">{resume.name}</h1>
          <p className="text-xl text-gray-400">{resume.title}</p>
          <p className="text-gray-500 max-w-2xl mx-auto">
            {resume.summary}
          </p>
        </section>

        {resume.skills?.length > 0 && (
          <section>
            <h2 className="text-3xl font-semibold mb-6">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {resume.skills.map((skill, i) => (
                <span key={i} className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

        {resume.projects?.length > 0 && (
          <section>
            <h2 className="text-3xl font-semibold mb-6">Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {resume.projects.map((project, i) => (
                <div key={i} className="p-6 bg-gray-900 rounded-xl border border-gray-800">
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  <p className="text-gray-400 mt-2">{project.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <footer className="text-center text-gray-600 border-t border-gray-800 pt-8">
          Built with Next.js & Tailwind CSS
        </footer>

      </div>
    </div>
  );
}
