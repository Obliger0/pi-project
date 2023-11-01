import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInApi } from "../../Apis/api";
import { saveSignedInUserinfo } from "../../Redux/userSlice";

export function SignIn() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  async function handleOnSubmit(e) {
    e.preventDefault();
    try {
      let email = e.target.email.value;
      let pass = e.target.pass.value;
      const res = await signInApi(email, pass);
      dispatch(saveSignedInUserinfo(res.userData))
      if (res.userData.userType === "admin") navigate("/admin-dashboard");
      if (res.userData.userType === "student") navigate("/student-dashboard");
    } catch (err) {
      console.log({ err });
    }
  }
  return (
    <div className="container">
      <div className="sign-up-text">Sign Up Here</div>
      <form onSubmit={handleOnSubmit}>
        <input type="email" placeholder="Email Address" name="email" />
        <input type="password" placeholder="Password" name="pass" />
        <button className="submit-btn">Submit</button>
      </form>
      <div
        className="sign-up-link"
        onClick={() => {
          navigate("/sign-up");
        }}
      >
        Sign Up
      </div>
    </div>
  );
}
