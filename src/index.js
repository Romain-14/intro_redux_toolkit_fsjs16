import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
    //  englobe notre application d'un provider qui va rendre disponible nos state et fonction réductrices à l'ensemble de notre app' juste en s'abonnant sur les composants qui en ont besoin via le hook useSelector et le hook useDispatch 
    <Provider store={store}>
        <App />
    </Provider>
    // </React.StrictMode>
);
