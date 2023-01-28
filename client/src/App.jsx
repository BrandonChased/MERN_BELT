import './App.css';
import { Routes,Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import New from './pages/New';
import ViewOne from './pages/ViewOne';


function App() {
  return (
    <div className="App" style={{backgroundColor: "orange",minHeight: "100vh"}}>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/new' element={<New />} />
        <Route path='/view/:id' element={<ViewOne />} />
      </Routes>
    </div>
  );
}

export default App;
