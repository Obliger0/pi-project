export async function signUpApi(name, email, password, userType) {
  try {
    const res = await fetch("/user/sign-up", {
      method: "POST",
      body: JSON.stringify({ name, email, password, userType }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (err) {
    console.log(err);
  }
}

export async function signInApi(email, password) {
  try {
    const res = await fetch("/user/sign-in", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      // credentials: "include",
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

export async function submitFormApi(name, email, phone, file) {
  try {
    const res = await fetch("/student/form", {
      method: "POST",
      body: JSON.stringify({ name, email, file }),
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
    const res = await fetch("/student/get-user-responses", {
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
    const res = await fetch("/admin/get-all-responses");
    const data = res.json();
    // console.log({data});
    return data;
  } catch (err) {
    console.log(err);
  }
}

export const logOut = async () => {
  try {
    const res = await fetch("/user/logout", {
      credentials: "include",
    });
    return res.status;
  } catch (err) {
    console.log({ err });
  }
};


export async function uploadImageApi(image, size, name) {
  try {
    const response = await fetch("/image/upload-image", {
      method: "POST",
      body: JSON.stringify({
        image,
        size,
        name,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
