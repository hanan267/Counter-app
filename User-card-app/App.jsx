import React from "react";
import UserCard from "./userCard";

const App = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #89f7fe, #66a6ff)",
        color: "#fff",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "36px",
          marginBottom: "20px",
          textShadow: "2px 2px 10px rgba(0, 0, 0, 0.3)",
          textAlign: "center",
        }}
      >
        Meet Our Team
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          width: "100%",
          maxWidth: "2505px",
          justifyContent: "center",
        }}
      >
        <UserCard
          name="Hanan Yesuf"
          email="hananyesuf329@gmail.com"
          age={21}
          backgroundColor="#FFD700" // Golden yellow
          maxWidth="350px"
        />
        <UserCard
          name="Hayat Edris"
          email="hayatedris@example.com"
          age={21}
          backgroundColor="#FF6347" // Tomato red
          maxWidth="350px"
        />
        <UserCard
          name="Hayat Hussen"
          email="hayathussen@example.com"
          age={20}
          backgroundColor="#3CB371" // Medium sea green
          maxWidth="350px"
        />
      </div>
    </div>
  );
};

export default App;
