 import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddUser from './components/Adduser';
import UpdateUser from './components/Update';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-user" element={<AddUser />} />
      <Route path="/update-user/:id" element={<UpdateUser />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
