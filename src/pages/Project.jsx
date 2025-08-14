function Project() {
  const styles = {
    float3D: {
      animation: "float3D 3s ease-in-out infinite",
    },
    keyframes: `
      @keyframes float3D {
        0% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
        50% { transform: translateY(-10px) rotateX(5deg) rotateY(5deg); }
        100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
      }
    `,
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #111827, #000, #1f2937)",
        color: "white",
        padding: "2rem",
      }}
    >
      {/* Inject keyframes */}
      <style>{styles.keyframes}</style>

      {/* Main Heading */}
      <h1
        style={{
          ...styles.float3D,
          fontSize: "3rem",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "2.5rem",
          letterSpacing: "0.1em",
        }}
      >
        Projects
      </h1>

      {/* Project 1 */}
      <div style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontSize: "1.8rem",
            fontFamily: "serif",
            marginBottom: "1rem",
            color: "#4ADE80", // green shade
          }}
        >
          Derma AI | React, HTML, CSS, MongoDB, Node.js, TensorFlow
        </h2>
        <ul
          style={{
            listStyle: "disc",
            paddingLeft: "1.5rem",
            lineHeight: "1.8",
            fontWeight: "300",
          }}
        >
          <li>
            An AI-Driven Platform for Early Skin Disease Detection and Personalized Skincare Recommendations.
          </li>
          <li>Integrated third-party APIs to enhance platform functionality and user experience.</li>
          <li>
            Capable of analyzing skin images to predict disease risk and providing personalized recommendations early.
          </li>
          <li>Facilitates timely intervention and better skin health management.</li>
          <li>Visualized GitHub data to show collaboration.</li>
        </ul>
      </div>

      {/* Project 2 */}
      <div>
        <h2
          style={{
            fontSize: "1.8rem",
            fontFamily: "monospace",
            marginBottom: "1rem",
            color: "#F472B6", // pink shade
          }}
        >
          Emergency Doorstep Fuel Delivery | PDO, PHP, HTML, CSS, MySQL
        </h2>
        <ul
          style={{
            listStyle: "disc",
            paddingLeft: "1.5rem",
            lineHeight: "1.8",
            fontWeight: "500",
          }}
        >
          <li>Innovative solution to assist vehicle owners stranded without fuel.</li>
          <li>
            Backend powered by PDO (PHP Data Objects) and MySQL, with HTML, CSS, and Bootstrap for the frontend.
          </li>
          <li>Enables instant refueling at any location and time.</li>
          <li>Facilitates easy and immediate access to fuel for vehicle owners.</li>
        </ul>
      </div>
    </div>
  );
}

export default Project;
