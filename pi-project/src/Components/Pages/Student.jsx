import { useState } from "react";
import { useSelector } from "react-redux";
import { getResponsesById, logOut, submitFormApi, uploadImageApi } from "../../Apis/api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
  async function handleOnSubmit(e) {
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
    let phone = "" + e.target.phone.value;
    // const file = e.target.name.value;
    const res = await submitFormApi(userId, name, email, phone, "123");
    console.log({ res });
  }
  const onSave = async (file) => {
    try {
      await uploadImage(file.data);
      alert("Image uploaded successfully");
    } catch (err) {
      console.log(err);
      alert("Unable to upload image");
    }
  };
  const uploadImage = async (image) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onloadend = async () => {
        try {
          const data = await uploadImageApi(
            reader.result,
            image.name,
            image.size
          );
          resolve(data);
        } catch (err) {
          reject(err);
        }
      };
    });
  };

  function setFiles(files) {
    const fileList = Object.values(files).map((file) => {
      console.log();
      return {
        url: URL.createObjectURL(file),
        data: file,
      };
    });
    // dispatch(setImage(...fileList));
  }
  
  const navigate = useNavigate();

  return (
    <div className="container">
      <form onSubmit={handleOnSubmit}>
        <input type="text" placeholder="Full Name" name="name" />
        <input type="email" placeholder="Email Address" name="email" />
        <input type="text" placeholder="Phone Number" name="phone" />
        <label for="image-file">Admin</label>
        <input type="file" id="image-file" name="file" />
        <button className="submit-btn">Submit</button>
      </form>
      <button
        onClick={ async () => {
          const res = await logOut();
          if(res===200) navigate("/")
        }}
      >
        LogOut
      </button>
    </div>
  );
}

function Responses({ userId }) {
  const [allRes, setAllRes] = useState([]);
  console.log({ allRes });

  async function getAllData() {
    const res = await getResponsesById(userId);
    const data = res.formRes;
    setAllRes(data);
  }
  useEffect(() => {
    getAllData();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <h1>Student DashBoard</h1>
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
