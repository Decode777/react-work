
import List from './components/List.jsx';
import { MathsComponent } from './components/Maths.jsx';
import MyComponent from './components/food.jsx';
import { GreetingsComponent } from './components/reactStylePrac.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyComponent />
        <GreetingsComponent />
        <List />
        <List />
        <MathsComponent />
        
      </header>
    </div>
  );
}

export default App;