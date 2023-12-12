
//import List from './components/List.jsx';
//import { MathsComponent } from './components/Maths.jsx';
//import MyComponent from './components/food.jsx';
//import { GreetingsComponent } from './components/reactStylePrac.jsx';
//import Header from './components/Header.jsx';
//import Note from './components/Note.jsx';
//import Footer from './components/Footer.jsx';
//import "./components/styles.css";
import React from 'react';
import  Card  from './components/Card.jsx';
import contacts from './contacts.js';
import Avatar from './components/Avatar.jsx';

function App() {
  return (
    <div>
      {/* 
        <MyComponent />
        <GreetingsComponent />
        <List />
        <List />
        <MathsComponent />
      */}
      {/* 
        <Header />
        <Note />
        <Footer />
      */}
      {/* <h1>My Contacts</h1>
      <Card
        name="John Doe"
        img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        tel="123-456-7890"
        email="john@example.com"
      />
      <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    /> */}
      {/* Add more Card components with different props as needed */}
      
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://pbs.twimg.com/profile_images/744849215675838464/IH0FNIXk.jpg" />
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />

    </div>
  );
}

export default App;