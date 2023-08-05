import axios from "../axios/axios";
import jwt_decode from "jwt-decode";

export async function adminLogin({ email, password }) {
  console.log(email);
  try {
    if (email) {
      const { data } = await axios.post("/adminLogin", { email, password });
      console.log(data);
      return Promise.resolve({ data });
    }
  } catch (error) {
    return Promise.reject({ error: "Password doesn't Match...!" });
  }
}
export async function createStand(values) {
  const standName = values.standName;
  const capacity = values.capacity;
  const price = values.price;
  try {
    if (values) {
      const { data } = await axios.post("/admin/createStand", {
        standName,
        capacity,
        price,
      });
      console.log(data);
      return Promise.resolve({ data });
    }
  } catch (error) {
    return Promise.reject({ error: "Couldn't Create Stand..." });
  }
}

export async function getStand() {
  try {
    const { data } = await axios.get("/admin/getStand");
    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ error: "Couldn't find Stand..." });
  }
}
export async function editStand(id) {
  try {
    console.log("hi");
  } catch (error) {}
}

export async function addMatch(formData) {
  console.log(formData);
  try {
    if (formData) {
      const { data } = await axios.post("/admin/addMatch", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } else {
      return Promise.reject({ error: "Couldn't Create Match.." });
    }
  } catch (error) {
    return Promise.reject({ error: "Couldn't Create Match.." });
  }
}

export async function getMatch() {
  try {
    const { data } = await axios.get("/admin/getMatch");
    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ error: "Couldn't find Matches..." });
  }
}
