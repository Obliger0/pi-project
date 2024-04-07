import { useNavigate } from "react-router-dom";
import { signUpApi } from "../../Apis/api";
import "../component.css";

export function SignUp() {
  const navigate = useNavigate();

  async function handleOnSubmit(e) {
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
    let pass = e.target.pass.value;
    let admin = e.target.children[4].children.admin.checked;
    let student = e.target.children[4].children.student.checked;
    let userType = "";
    if (admin) userType = "admin";
    else if (student) userType = "student";
    const res = await signUpApi(name, email, pass, userType);
    if (res.status === 201) alert("User Already Exist");
    else if (res.status === 200) navigate("/");
  }

  return (
    <div className="container">
      <div className="sign-up-text">Sign Up Here</div>
      <form onSubmit={handleOnSubmit}>
        <input type="text" placeholder="Full Name" name="name" />
        <input type="email" placeholder="Email Address" name="email" />
        <input type="password" placeholder="Password" name="pass" />
        <label>User Role</label>
        <div className="radio-btn">
          <label for="admin">Admin</label>
          <input type="radio" id="admin" name="user" />
          <label for="student">Student</label>
          <input type="radio" id="student" name="user" />
        </div>
        <button className="submit-btn">Submit</button>
      </form>
      <div
        className="sign-in-link"
        onClick={() => {
          navigate("/");
        }}
      >
        
        Sign In
      </div>
    </div>
  );
}
