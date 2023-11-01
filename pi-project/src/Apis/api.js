export async function signUpApi(name,email,password,userType){
    try {
        const res = await fetch("http://localhost:5001/sign-up", {
        method: "POST",
      body: JSON.stringify({ name, email, password,userType }),
      headers: {
        "Content-Type": "application/json",
        },
        });
    return res;
    } catch(err){
        console.log(err)
    }
}

export async function signInApi(email, password) {
  try {
    const res = await fetch("http://localhost:5001/sign-in", {
      method: "POST",
      body: JSON.stringify({ email, password,}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function submitFormApi(userId,name,email, phone,file) {
  try {
    const res = await fetch("http://localhost:5001/form", {
      method: "POST",
      body: JSON.stringify({ userId, name, email, phone, file }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getResponsesById(userId) {
  try {
    const res = await fetch("http://localhost:5001/get-user-responses", {
      method: "POST",
      body: JSON.stringify({ userId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}


export async function getAllResponses() {
  try {
    const res = await fetch("http://localhost:5001/get-all-responses");
    const data = res.json();
    console.log({data});
    return data;
  } catch (err) {
    console.log(err);
  }
}






