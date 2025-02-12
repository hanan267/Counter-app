import React from "react";
import "./../styles.css";
import contacts from "../contacts";
import Card from "./Card";


function App() {
  return (
    <div>
       <h1 className="heading">My Contacts</h1>
      {contacts.map((contact, index) => (
        <Card
          key={index} // 
          name={contact.name}
          phone={contact.phone}
          email={contact.email}
          imgURL={contact.imgURL}
        />
      ))}
    </div>
  );
}

export default App;
