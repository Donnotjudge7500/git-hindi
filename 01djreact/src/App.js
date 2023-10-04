 
import Sukku from "./practice";

function App() {
  // Declaring a variable.
  const username = 'Sakshi'
  const username1 = 'Shivakshi'
  let username3;
  if (true) {
    username3 = 'bhushan'
  }

  return (
    // Always returns only one element. Thats why we return a single fragment(empty brackets).
    <>
      <Sukku />
      <h2>Hey Meri Jaan {username} and {username1} and {username3}</h2>
    </>
  );
}

export default App;
