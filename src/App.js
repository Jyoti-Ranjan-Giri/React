import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import Greet from './components/Greet.jsx';
function App() {
  return (
    <div className="App">
      <Counter1 />
      <Counter2 />
      <Greet name="kunu" />
      <Greet name="Munu" />
      <Greet name="Sonu" />
    </div>
  );
}

export default App;
