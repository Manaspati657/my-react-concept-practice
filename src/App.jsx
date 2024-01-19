import "./App.css";
import Page from "./Components/TaskCard";
// import TaskCard from './Class_Components/TaskCard';

// bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./Components/Layout";
// import BlogList from "./Components/BlogList";
// import Home from "./Components/Home";
// import Contact from "./Components/Contacts";
// import NoPage from "./Components/NoPage";
// import Hooks_useState from "./Hooks/Hooks_useState";
// import Hooks_useEffect from "./Hooks/Hooks_useEffect";
// import Hooks_useContext from "./Hooks/Hooks_useContext";
// import Hooks_useRef from "./Hooks/Hooks_useRef";
// import Hooks_useReducer from "./Hooks/Hooks_useReducer";
// import ApiCall from "./Components/ApiCall";
// import Hooks_useCallback from "./Hooks/UseCallback_hook/Hooks_useCallback";
// import Hooks_useMemo from "./Hooks/UseMemo_hook/Hooks_useMemo";
// import Posts from "./Components/Crud/Posts";
import Signup from "./Components/Yup_Formik_FormValidation/Signup";
import SignIn from "./Components/ReactHookForm/SignIn";
import SetUpUser from "./Components/ReactHookForm/SetUpUser";

const showType = {
  data: "signIn",
  // data:"signUp",
  // data:"card"
};

function App() {
  return (
    // react form hook
    <div className="container">
      <div className="w-70 m-5">
        {/* validation, default values , error message */}
        {/* <SignIn /> */}
        {/* advanced form */}
        <SetUpUser />
      </div>
    </div>

    // form validation
    // <Signup />

    // api calls
    // <div className="container">
    //   <div className="w-70 m-5">
    //     <ApiCall />
    //   </div>
    // </div>

    // Hooks
    // <div className="container">
    //   <div className="w-50 m-5">
    //     <Hooks_useState />
    //     <Hooks_useEffect />
    //     <Hooks_useContext />
    //     <Hooks_useRef />
    //     <Hooks_useReducer />
    //     <Hooks_useCallback />
    //     <Hooks_useMemo />
    //   </div>
    // </div>

    // Routing
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="blogs" element={<Blogs />} />
    //       <Route path="contact" element={<Contact />} />
    //       <Route path="*" element={<NoPage />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>

    //   fundamentals
    // <div className="container">
    //   <div className="w-50 m-5">
    //   <Page type={showType} />
    //   </div>
    // </div>
  );
}

export default App;
