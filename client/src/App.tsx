import {Route,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CreateDashboard from './components/CreateDashboard';
import ViewDashboard from './components/ViewDashboard';

function App() {
  return (
    <div className='border' >
    { <Header /> }
    <Routes>
      <Route path='/create' Component={CreateDashboard}/>
      <Route path='/view' Component={ViewDashboard}/>
      <Route path='/' Component={ViewDashboard}/> 
    </Routes>
    </div>
    );
}

export default App;