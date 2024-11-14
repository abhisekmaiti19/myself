import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
//import Working from "./pages/Working.jsx";
import Projects from "./pages/Projects.jsx";
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
import Skills from "./pages/Skills.jsx";
import { SidebarProvider } from "./components/ui/sidebar.jsx";
import { ThemeProvider } from "@/components/theme-provider";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />}>
      <Route path="" element={<Resume />}></Route>
      <Route path="skills" element={<Skills />}></Route>
      <Route path="projects" element={<Projects />}></Route>
      <Route path="feedbacks" element={<Home />}></Route>
      <Route path="mentoring" element={<Home />}></Route>
      <Route path="freelancing" element={<Home />}></Route>
      <Route path="thinking" element={<Home />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <ToogleContextProvider>
        <SidebarProvider>
          <RouterProvider router={routes} />
        </SidebarProvider>
      </ToogleContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
