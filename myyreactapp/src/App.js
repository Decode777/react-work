
//import List from './components/List.jsx';
//import { MathsComponent } from './components/Maths.jsx';
//import MyComponent from './components/food.jsx';
//import { GreetingsComponent } from './components/reactStylePrac.jsx';
import Header from './components/Header.jsx';
import Note from './components/Note.jsx';
import Footer from './components/Footer.jsx';
import "./components/styles.css";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <MyComponent /> */}
        {/* <GreetingsComponent /> */}
        {/* <List /> */}
        {/* <List /> */}
        {/* <MathsComponent /> */}
       
        <Header />
        <Note />
        <Footer />
      </header>
    </div>
  );
}

export default App;