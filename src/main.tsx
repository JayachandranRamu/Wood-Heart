
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./UserPage/Redux/store.ts";


ReactDOM.createRoot(document.getElementById("root")!).render(

    <BrowserRouter>
    <ChakraProvider>
      <Provider store={store}>
      <App />
      </Provider>
    </ChakraProvider>
    </BrowserRouter>

);
