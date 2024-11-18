import UserList from './components/userList';
import './App.css';
import UserForm from './components/UserForm';
import UserEdit from './components/UserEdit';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <UserList/> 
       <UserForm/> 
       <UserEdit/> 
        {/* the UserList is called   */}
      </header>
    </div>
  );
}

export default App;
