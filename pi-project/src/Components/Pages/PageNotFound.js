import { useEffect, useState } from "react";

export const PageNotFound = () => {
    const [ count, setCount] = useState(0);
  return <div>
    <ChildComp count={count}/>
    <button onClick={()=>{
        setCount(count + 1);
    }}>click</button>
  </div>
};


const ChildComp = ({count})=>{
    useEffect(()=>{
        console.log("child effect logged", count);
    },[])
    return <div>{count}</div>
}
