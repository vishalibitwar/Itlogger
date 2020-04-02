import React ,{ useEffect, Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from  'materialize-css/dist/js/materialize.min.js';
import './App.css';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/Logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/Logs/AddLogModal';
import EditLogModal from './components/Logs/EditLogModal'
import AddTechModal from './components/techs/AddTechModal'
import TechListModal from './components/techs/TechListModal';

import { Provider } from 'react-redux';
import store from './Store';

function App() {
  useEffect(() =>{
     M.AutoInit();
  });
  return (
    <Provider store={store} >
    <Fragment>
       <SearchBar />
       <div className="container">
         <AddBtn />
         <AddLogModal />
         <EditLogModal />
         <AddTechModal />
         <TechListModal />
       <Logs />
       </div>
    </Fragment>
    </Provider>
  );
}

export default App;
