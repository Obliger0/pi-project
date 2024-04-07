import { useEffect, useState } from "react"
import { getAllResponses } from "../../Apis/api"

export function Admin() {

    const [allStudentRes, setAllStudentRes] = useState([]);
    console.log({allStudentRes});

    async function getAllData() {
        const res = await getAllResponses();
        const data = res.formRes;
        setAllStudentRes(data);
    }
    useEffect(()=>{
        getAllData();
    },[])
    return (
      <>
      <h1>Admin DashBoard</h1>
        <div className="card-container">
          {allStudentRes.map((obj) => {
            return <Card data={obj} />;
          })}
        </div>
      </>
    );
    
}

function Card({data}) {
    return (
      <div className="card">
        <div>{data?.email}</div>
        <div>{data?.name}</div>
      </div>
    );
}