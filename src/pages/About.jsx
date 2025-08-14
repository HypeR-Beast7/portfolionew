function About() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4 sm:p-6 md:p-10">
      <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 md:p-12 max-w-3xl w-full transform transition duration-700 ease-out hover:scale-105 hover:shadow-2xl animate-fadeIn">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 text-center">
          About Me
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed text-center">
          Graduated with a{" "}
          <span className="font-semibold text-indigo-600">
            Bachelor’s degree in Computer Engineering
          </span>
          , demonstrating a strong foundation in software development, hardware
          architecture, and systems integration. Focused on delivering{" "}
          <span className="font-semibold text-green-600">
            innovative and efficient engineering solutions
          </span>
          , with the ability to adapt and apply knowledge to real-world
          challenges effectively.
        </p>
      </div>

      {/* Inline keyframes for fade-in animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}

export default About;
