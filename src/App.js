import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from "./store/reducer"
import store from "./store"
import {Provider} from "react-redux"
import Get from "./component/get"
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Get />
      <h1>hi</h1>
      </Provider>
    </div>
  );
}

export default App;
