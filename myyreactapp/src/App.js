
//import List from './components/List.jsx';
//import { MathsComponent } from './components/Maths.jsx';
//import MyComponent from './components/food.jsx';
//import { GreetingsComponent } from './components/reactStylePrac.jsx';
//import Header from './components/Header.jsx';
//import Note from './components/Note.jsx';
//import Footer from './components/Footer.jsx';
//import "./components/styles.css";
import  Card  from './components/Card.jsx';


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
      <h1>My Contacts</h1>
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
    />
      {/* Add more Card components with different props as needed */}
    </div>
  );
}

export default App;