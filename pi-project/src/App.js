import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { SignUp } from './Components/Pages/SignUp';
import { SignIn } from './Components/Pages/SignIn';
import { Admin } from './Components/Pages/Admin';
import { Student } from './Components/Pages/Student';
import { useSelector } from "react-redux";

function App() {

  const { _id: userId } = useSelector((state) => state.user.userData);
  // console.log({userId});
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/admin-dashboard" element={ <Admin /> } />
          <Route path="/student-dashboard" element={ <Student />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
