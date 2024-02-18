import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Working from "./pages/Working.jsx";
import ToogleContextProvider from "./context/Toogle/ToogleContextProvider.jsx";
// import Home from "./pages/Landing/Home.jsx";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  // createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Resume from "./pages/Resume.jsx";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />}>
      <Route path="" element={<Resume />}></Route>
      <Route path="skills" element={<Home />}></Route>
      <Route path="projects" element={<Working />}></Route>
      <Route path="feedbacks" element={<Home />}></Route>
      <Route path="mentoring" element={<Home />}></Route>
      <Route path="freelancing" element={<Home />}></Route>
      <Route path="thinking" element={<Home />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToogleContextProvider>
      <RouterProvider router={routes} />
    </ToogleContextProvider>
  </React.StrictMode>
);
