import "./App.css";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { Box } from "@mui/material";
import Product from "./layout/Product";

function App() {
  return (
    <Provider store={store}>
      <Box>
        <Product />
      </Box>
    </Provider>
  );
}

export default App;
