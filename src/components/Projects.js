function Projects() {
  return (
    <section id="projects" className="section">

      <h2>Projects</h2>

      <div className="projects">

        <div className="card">
          <h3>RomanTalk</h3>
          <p>
            AI-powered SaaS built using Spring Boot,
            React, PostgreSQL, Redis and OpenAI.
          </p>
        </div>

        <div className="card">
          <h3>SmartResume Screener</h3>
          <p>
            Resume analyzer using Spring AI and Gemini AI.
          </p>
        </div>

        <div className="card">
          <h3>SpringCacheFlow</h3>
          <p>
            Advanced caching project demonstrating
            cache optimization strategies.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Projects;