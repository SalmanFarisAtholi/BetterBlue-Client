import axios from "../axios/axios";
import jwt_decode from "jwt-decode";

// axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

/** Make API Requests */

/** To get username from Token */
export async function getUsername() {
  const token = localStorage.getItem("token");
  if (!token) return Promise.reject("Cannot find Token");
  let decode = jwt_decode(token);
  return decode;
}

/** authenticate function */
export async function authenticate(email) {
  try {
    return await axios.post("/authenticate", { email });
  } catch (error) {
    return { error: "email doesn't exist...!" };
  }
}

/** get User details */
export async function getUser(email) {
  try {
    const { data } = await axios.get(`/user/${email}`);
    return { data };
  } catch (error) {
    return { error: "Password doesn't Match...!" };
  }
}
const otp = 793261;
/** register user function */
export async function registerUser(credentials) {
  try {
    const {
      data: { msg },
      status,
    } = await axios.post(`/register`, credentials);

    let { username, email } = credentials;
    console.log(username);
    /** send email */
    if (status === 201) {
      await axios.post("/registerMail", { userEmail: email, otp });
    }

    return Promise.resolve(msg);
  } catch (error) {
    return Promise.reject({ error });
  }
}

/** login function */
export async function verifyPassword({ email, password }) {
  try {
    if (email) {
      const { data } = await axios.post("/login", { email, password });
      return Promise.resolve({ data });
    }
  } catch (error) {
    return Promise.reject({ error: "Password doesn't Match...!" });
  }
}

/** update user profile function */
export async function updateUser(response) {
  try {
    const token = await localStorage.getItem("token");
    const data = await axios.put("/updateuser", response, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ error: "Couldn't Update Profile...!" });
  }
}

/** generate OTP */
export async function generateOTP(username) {
  try {
    const {
      data: { code },
      status,
    } = await axios.get("/generateOTP", { params: { username } });

    // send mail with the OTP
    if (status === 201) {
      let {
        data: { email },
      } = await getUser({ username });
      let text = `Your Password Recovery OTP is ${code}. Verify and recover your password.`;
      await axios.post("/registerMail", {
        username,
        userEmail: email,
        text,
        subject: "Password Recovery OTP",
      });
    }
    return Promise.resolve(code);
  } catch (error) {
    return Promise.reject({ error });
  }
}

/** verify OTP */
export async function verifyOTP({ code }) {
  try {
    const { data, status } = await axios.get("/verifyOTP", {
      params: { code },
    });
    return { data, status };
  } catch (error) {
    return Promise.reject(error);
  }
}

/** reset password */
export async function resetPassword({ email, password }) {
  try {
    const { data, status } = await axios.put("/resetPassword", {
      email,
      password,
    });
    return Promise.resolve({ data, status });
  } catch (error) {
    return Promise.reject({ error });
  }
}

export async function getMatch() {
  try {
    const { data } = await axios.get("/getMatch");
    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ error: "Couldn't find Matches..." });
  }
}
export async function getResult() {
  try {
    const { data } = await axios.get("/getResult");
    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ error: "Couldn't find Results..." });
  }
}

export async function getOneMatch(id) {
  console.log(id);
  try {
    const { data } = await axios.get(`/getOneMatch/${id}`);
    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ error: "Couldn't find Match Deatiles..." });
  }
}
export async function getOnePlayer(id) {
  console.log(id);
  try {
    const { data } = await axios.get(`/getOnePlayer/${id}`);
    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ error: "Couldn't find Player Deatiles..." });
  }
}

export async function doPayment(values, matchId, total, stand) {
  try {
    const { data } = await axios.post(`/doPayment`, {
      values,
      matchId,
      total,
      stand,
    });
    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ error: "Payment Failed" });
  }
}
export async function verifyPayment(response, newData) {
  try {
    const { data } = await axios.post(`/verifyPayment`, { response, newData });
    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ error: "Payment Veification Failed" });
  }
}

export async function getNews() {
  try {
    const { data } = await axios.get("/getNews");
    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ error: "Couldn't find Matches..." });
  }
}
export async function getPartner() {
  try {
    const { data } = await axios.get("/getPartner");
    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ error: "Couldn't find partner..." });
  }
}
export async function getPlayer() {
  try {
    const { data } = await axios.get("/getPlayer");
    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ error: "Couldn't find Player..." });
  }
}
