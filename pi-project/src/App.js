import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { SignUp } from './Components/Pages/SignUp';
import { SignIn } from './Components/Pages/SignIn';
import { Admin } from './Components/Pages/Admin';
import { Student } from './Components/Pages/Student';
import { useSelector } from "react-redux";
import { PageNotFound } from './Components/Pages/PageNotFound';

function App() {

  const { _id: userId } = useSelector((state) => state.user.userData);
  console.log({userId});
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/admin-dashboard"
            element={userId ? <Admin /> : <SignIn />}
          />
          <Route
            path="/student-dashboard"
            element={userId ? <Student /> : <SignIn />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
