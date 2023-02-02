import "./App.css";
import ProductMain from "./Components/Product/ProductMain";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ProductMain />
      </div>
    </Provider>
  );
}

export default App;
