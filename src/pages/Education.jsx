function Education() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-indigo-100 via-white to-pink-100 p-6">
      <div className="max-w-3xl w-full space-y-6 animate-slideUp">
        
        <h1 className="text-4xl font-extrabold text-indigo-700 text-center mb-6">
          Education
        </h1>

        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-indigo-500 hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-semibold text-indigo-600">
            APJ Abdul Kalam Technological University (KTU)
          </h2>
          <p className="text-gray-600 text-lg mt-2">
            Bachelor of Technology in Computer Science <br />
            <span className="italic text-sm text-gray-500">
              Wayanad, Kerala | Oct 2022 - May 2025
            </span>
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-pink-500 hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-semibold text-pink-600">
            State Board of Technical Education Kerala
          </h2>
          <p className="text-gray-600 text-lg mt-2">
            Diploma in Computer Engineering <br />
            <span className="italic text-sm text-gray-500">
              Trikkaripur, Kerala | June 2019 - July 2022
            </span>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Education;
