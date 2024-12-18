// AboutSection.jsx
import React from "react";

function About() {
  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-gray-800 dark:text-white py-10 px-4">
      {/* Main Heading */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-600 dark:text-white max-w-2xl mx-auto">
          We specialize in cutting-edge technologies like Artificial Intelligence and Machine Learning to shape the future.
        </p>
      </div>

      {/* Content Section */}
      <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 max-w-6xl mx-auto">
        {/* Section 1 */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">What is AI?</h2>
          <p className="text-gray-600">
            Artificial Intelligence (AI) enables machines to mimic human intelligence and automate tasks efficiently, driving innovation in every sector.
          </p>
        </div>

        {/* Section 2 */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">What is ML?</h2>
          <p className="text-gray-600">
            Machine Learning (ML) is a subset of AI that allows systems to learn and improve from data without being explicitly programmed.
          </p>
        </div>

        {/* Section 3 */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to empower businesses and individuals with AI/ML-powered tools to transform ideas into impactful solutions.
          </p>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="mt-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">Technologies We Work With</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
            TensorFlow
          </div>
          <div className="flex items-center justify-center bg-gradient-to-r from-green-400 to-teal-400 text-white font-semibold py-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
            PyTorch
          </div>
          <div className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
            OpenAI
          </div>
          <div className="flex items-center justify-center bg-gradient-to-r from-orange-400 to-red-400 text-white font-semibold py-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
            Scikit-Learn
          </div>
        </div>
        <div className="my-4">
          <h1 className="text-3xl bg-yellow-500 rounded-xl px-4 py-2">What is Technology?</h1>
          <p className="text-md text-black px-2 rounded-xl" style={{ background: "whitesmoke", fontFamily: "sans-serif" }}>
            Technology refers to the application of scientific knowledge, tools, and techniques to solve problems, improve processes, and make life more efficient. It encompasses a wide range of innovations and advancements, including software, hardware, machinery, systems, and methods, that enhance productivity, communication, healthcare, education, and virtually every aspect of human life.

            Key characteristics of technology include:

            Purpose-driven: Designed to solve specific problems or improve a process.
            Evolving: Constantly improving over time through innovation and research.
            Transformative: Revolutionizing industries and creating new opportunities.
            Cross-disciplinary: Combines fields like engineering, computer science, biology, and more.</p>
        </div>
        <div>
          <h1 className="text-3xl bg-orange-500 rounded-xl px-4 py-2">Challenges and Considerations</h1>
          <p className="text-md text-black px-2 rounded-xl" style={{ background: "whitesmoke", fontFamily: "sans-serif" }}>
            While AI-ML holds immense potential, it also presents challenges:
            Ethical Concerns:
            Bias in algorithms, misuse of surveillance, and job displacement.
            Data Privacy:
            AI relies heavily on data, raising concerns about how personal information is used.
            Cost:
            Developing and deploying AI solutions can be expensive.
            Regulation:
            Lack of global consensus on AI governance.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
