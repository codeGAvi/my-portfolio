import blogs from "../data/blogs.json";

function TechJournal() {

  return (
    <section id="journal" className="section">

      <h2>Daily Tech Journal</h2>

      {blogs.map((blog) => (
        <div className="card" key={blog.id}>

          <h3>{blog.title}</h3>

          <small>{blog.date}</small>

          <p>{blog.content}</p>

        </div>
      ))}

    </section>
  );
}

export default TechJournal;