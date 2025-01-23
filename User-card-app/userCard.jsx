import React from "react";

const UserCard = ({ name, email, age, backgroundColor }) => {
  return (
    <div
      style={{
        backgroundColor,
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        textAlign: "center",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        
      }}
    >
      <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>{name}</h2>
      <p style={{ fontSize: "1rem", margin: "5px 0", wordBreak: "break-word" }}>
        Email: {email}
      </p>
      <p style={{ fontSize: "1rem", margin: "5px 0" }}>Age: {age}</p>
    </div>
  );
};

export default UserCard;