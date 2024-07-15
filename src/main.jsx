import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./redux/store.js";

import App from "./components/App/App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
    <HelmetProvider>
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <BrowserRouter basename='/node_fs97_front_Marharyta23'>
                    <App />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </HelmetProvider>
    // </React.StrictMode>
);
