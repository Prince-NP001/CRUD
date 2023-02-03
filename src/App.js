
import { Provider } from 'react-redux';
import './App.css';

import Employee from "./layout/Employee"
import store from './Redux/store';
function App() {


  return (
    <Provider store={store}>
      <div className="App">
        <Employee />

      </div>
    </Provider>

  );
}

export default App;
