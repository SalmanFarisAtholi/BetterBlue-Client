import axios from "../axios/axios";
import jwt_decode from "jwt-decode";

export async function adminLogin({email,password}){
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