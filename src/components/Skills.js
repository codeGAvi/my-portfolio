function Skills() {

  const skills = [
    "Java",
    "Spring Boot",
    "Microservices",
    "Spring Security",
    "JWT",
    "Redis",
    "MySQL",
    "PostgreSQL",
    "Docker",
    "Spring AI",
    "OpenAI",
    "Gemini AI",
    "MCP",
    "RAG",
    "React"
  ];

  return (
    <section className="section">
      <h2>Tech Stack</h2>

      <div className="skills">
        {skills.map((skill) => (
          <span key={skill} className="skill">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;