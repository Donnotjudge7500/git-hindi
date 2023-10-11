import './App.css';
import Login from './Components/Login';
import Profile from './Components/Profile';
import UserContextProvider from './Context/UserContext.jsx'

function App() {
  return (
    <UserContextProvider>
      <h1>Hello React</h1>
      <Login />
      <Profile/>
    </UserContextProvider>
  );
}

export default App;
