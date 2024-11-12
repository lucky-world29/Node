import UserList from './components/userList';
import './App.css';
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <UserList/> 
       <UserForm/>  
        {/* the UserList is called   */}
      </header>
    </div>
  );
}

export default App;
