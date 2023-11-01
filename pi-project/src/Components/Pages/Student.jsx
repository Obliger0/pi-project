import { useState } from "react";
import { useSelector } from "react-redux";
import { getResponsesById, submitFormApi } from "../../Apis/api";
import { useEffect } from "react";

export function Student() {
  const { _id: userId } = useSelector((state) => state.user.userData);
  // console.log({userId});
  const [toggleTab, setToggleTab] = useState(true);
  return (
    <div className="student-tab-container">
      <div className="student-tab">
        <h3
          className="student-tab-div"
          onClick={() => {
            if (!toggleTab) setToggleTab(true);
          }}
        >
          Form
        </h3>
        <h3
          className="student-tab-div"
          onClick={() => {
            if (toggleTab) setToggleTab(false);
          }}
        >
          My Responses
        </h3>
      </div>
      {toggleTab ? <FormComponent userId={userId} /> : <Responses />}
    </div>
  );
}

function FormComponent({ userId }) {
  const [number, setNumber] = useState("");
  async function handleOnSubmit(e) {
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
    let phone = "" + e.target.phone.value;
    // const file = e.target.name.value;
    // console.log({userId,name,email,phone});
    // console.log(typeof phone);
    const res = await submitFormApi(userId, name, email, phone, "123");
    console.log({ res });
  }

  return (
    <div className="container">
      <form onSubmit={handleOnSubmit}>
        <input type="text" placeholder="Full Name" name="name" />
        <input type="email" placeholder="Email Address" name="email" />
        <input
          type="text"
          placeholder="Phone Number"
          name="phone"
          // value={number}
          onChange={(e) => {
            // let num = Number(e.target.value);
            // console.log(num);
            // if(typeof num === number) setNumber(e.target.value);
          }}
        />
        <label for="image-file">Admin</label>
        <input type="file" id="image-file" name="file" />
        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

function Responses({userId}) {

  const [allRes, setAllRes] = useState([]);
  console.log({ allRes });

  async function getAllData() {
    const res = await getResponsesById(userId);
    const data = res.formRes;
    setAllRes(data);
  }
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <>
      <h1>Admin DashBoard</h1>
      <div className="card-container">
        {allRes.map((data) => {
          return (
            <div className="card">
              <div>{data?.email}</div>
              <div>{data?.name}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
