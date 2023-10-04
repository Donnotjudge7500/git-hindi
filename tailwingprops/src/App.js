import './App.css';
import Card from './components/Card';

function App() {
  let myObj = {
    username: 'Sakshi',
    age: 21
  }

  let newArray = [1, 2, 3, 4]
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl
      mb-4">Tailwind test</h1>
      <Card channel="Chai aur Code" someObject={ myObj }
        array = {newArray} btnText = 'visit me'
      />
      <Card channel='Sakshi' btnText='click me'/>
     </>
  );
}

export default App;
