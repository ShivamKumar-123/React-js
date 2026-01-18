import React from "react";

export default function About() {

  const courses = [
    {
      title: "React.js Mastery",
      desc: "Learn React from basics to advanced concepts including hooks and optimization.",
      img: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    },
    {
      title: "Frontend Development",
      desc: "Build beautiful UIs using HTML, CSS, Tailwind CSS, and JavaScript.",
      img: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    },
    {
      title: "Full Stack Development",
      desc: "Learn backend integration, APIs, databases, and deployment with MERN.",
      img: "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg",
    },
    {
      title: "JavaScript Advanced",
      desc: "Master ES6+, async/await, closures, and real-world JavaScript patterns.",
      img: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg",
    },
    {
      title: "Tailwind CSS Pro",
      desc: "Design responsive, modern UIs faster using Tailwind CSS utilities.",
      img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    },
    {
      title: "UI/UX Design",
      desc: "Learn modern UI/UX principles, wireframing, and user-centered design.",
      img: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    },
    {
      title: "Node.js Backend",
      desc: "Build scalable backend services using Node.js and Express.",
      img: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg",
    },
    {
      title: "MongoDB Database",
      desc: "Learn NoSQL databases, schema design, and MongoDB best practices.",
      img: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
    },
    {
      title: "API Development",
      desc: "Create RESTful APIs and integrate them with frontend applications.",
      img: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg",
    },
    {
      title: "Web Performance",
      desc: "Optimize websites for speed, SEO, and best user experience.",
      img: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg",
    },
    {
      title: "Git & GitHub",
      desc: "Learn version control, Git workflows, and collaboration using GitHub.",
      img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    },
    {
      title: "Deployment & DevOps",
      desc: "Deploy apps using Netlify, Vercel, Docker, and CI/CD pipelines.",
      img: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg",
    },
  ];

  return (
    <>
      {/* ================= ABOUT SECTION ================= */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">

            {/* Text */}
            <div className="md:w-1/2 animate-fadeInLeft">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                React Development{" "}
                <span className="text-indigo-600">Driven by Passion</span>
              </h2>

              <p className="mt-6 text-gray-600 text-lg">
                We build modern, scalable, and high-performance web applications
                using React with a focus on UI/UX excellence.
              </p>

              <p className="mt-4 text-gray-600">
                From startups to enterprise applications, our solutions are fast,
                reliable, and future-ready.
              </p>

              <button className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 hover:scale-105 transition">
                Learn More
              </button>
            </div>

            {/* Image */}
            <div className="md:w-1/2 animate-fadeInRight">
              <img
                src="https://media.istockphoto.com/id/513320180/photo/word-react-on-wood-planks.jpg?s=2048x2048&w=is&k=20&c=b3J6JSevvytfdJgSv65qPlbwHYxHKUnzXu7TBKcziBU="
                alt="React Development"
                className="w-full rounded-2xl shadow-2xl hover:scale-105 transition duration-500"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= COURSES SECTION ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-14">
            Our Popular Courses
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-500"
              >
                <img
                  src={course.img}
                  alt={course.title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900">
                    {course.title}
                  </h3>
                  <p className="mt-3 text-gray-600 text-sm">
                    {course.desc}
                  </p>

                  <button className="mt-4 text-indigo-600 font-semibold hover:underline">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
