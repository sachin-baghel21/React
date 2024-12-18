// HomeSection.jsx
import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-16 px-6 md:px-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl text-yellow-400 font-bold mb-4 animate-fade-in">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Crafting beautiful web experiences with React and Tailwind CSS.
          </p>
          <a
            href="#about"
            className="bg-white text-purple-500 px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:bg-gray-100 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 px-6 md:px-12 dark:bg-gray-800 dark:text-white bg-gray-100 transition-all duration-500 ease-in-out"
      >
        <div className="container bg-yellow-500 rounded-xl p-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <p className="text-gray-600 md:text-lg">
            Hi! I'm a passionate developer with a focus on creating intuitive,
            engaging web applications. I love solving problems and building
            things that make life easier.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className=" dark:bg-gray-800 dark:text-white py-16 px-6 md:px-12 bg-white transition-all duration-500 ease-in-out"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {/* Project 1 */}
            <div className="cursor:pointer p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300">
              <h3 className="text-lg font-bold mb-2 text-black">Project 1</h3>
              <p className="text-gray-600">
                A web application for managing tasks efficiently.
              </p>
            </div>
            {/* Project 2 */}
            <div className="cursor:pointer p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300">
              <h3 className="text-lg font-bold mb-2 text-black">Project 2</h3>
              <p className="text-gray-600">
                A portfolio website showcasing creativity and skills.
              </p>
            </div>
            {/* Project 3 */}
            <div className="cursor:pointer p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300">
              <h3 className="text-lg font-bold mb-2 text-black">Project 3</h3>
              <p className="text-gray-600">
                An e-commerce platform for modern shopping experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 dark:bg-indigo-500 px-6 md:px-12 bg-gray-100 transition-all duration-500 ease-in-out"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 md:text-lg mb-6">
            Have a question or want to work together? Feel free to reach out!
          </p>
          <a
            href="acb.com"
            className="bg-purple-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-purple-600 transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
