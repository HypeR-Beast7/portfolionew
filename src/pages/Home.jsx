// Home.jsx
function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      {/* Animated Heading */}
      <h1 className="text-5xl font-bold animate-bounce mb-4">
        Welcome to My Portfolio
      </h1>

      {/* Contact Info with fade-in effect */}
      <p className="text-lg opacity-0 animate-fadeIn delay-300">
        📞 7510791770 | 📧 aswanth.kv1770@gmail.com
      </p>
    </div>
  );
}

export default Home;
