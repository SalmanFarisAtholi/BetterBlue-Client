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
      const { data } = await axios.post("/admin/addMatch", { formData });
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
export async function addOpponent(formData) {
  try {
    if (formData) {
      const { data } = await axios.post("/admin/addOpponent", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return Promise.resolve({ data });
    } else {
      return Promise.reject({ error: "Couldn't Add Opponent.." });
    }
  } catch (error) {
    return Promise.reject({ error: "Couldn't Add Opponent.." });
  }
}

export async function getOpponent() {
  try {
    const { data } = await axios.get("/admin/getOpponent");
    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ error: "Couldn't find opponents..." });
  }
}
export async function addNews(formData) {
  try {
    if (formData) {
      const { data } = await axios.post("/admin/addNews", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return Promise.resolve({ data });
    } else {
      return Promise.reject({ error: "Couldn't Add news.." });
    }
  } catch (error) {
    return Promise.reject({ error: "Couldn't Create news..." });
  }
}

export async function getNews() {
  try {
    const { data } = await axios.get("/admin/getNews");
    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ error: "Couldn't find Matches..." });
  }
}

export async function addPartner(formData) {
  try {
    if (formData) {
      const { data } = await axios.post("/admin/addPartner", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (data) {
        return Promise.resolve({ data });
      } else {
        return Promise.reject({ error: "Couldn't Add Partner.." });
      }
    } else {
      return Promise.reject({ error: "Couldn't Add Partner.." });
    }
  } catch (error) {
    return Promise.reject({ error: "Couldn't Create Partner..." });
  }
}

export async function getPartner() {
  try {
    const { data } = await axios.get("/admin/getPartners");
    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ error: "Couldn't findPartners..." });
  }
}

export async function getPlayer() {
  try {
    const { data } = await axios.get("/admin/getPlayer");
    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ error: "Couldn't find Player..." });
  }
}


export async function addPlayer(formData) {
  try {
    if (formData) {
      const { data } = await axios.post("/admin/addPlayer", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (data) {
        return Promise.resolve({ data });
      } else {
        return Promise.reject({ error: "Couldn't Add Partner.." });
      }
    } else {
      return Promise.reject({ error: "Couldn't Add Partner.." });
    }
  } catch (error) {
    return Promise.reject({ error: "Couldn't Create Partner..." });
  }
}

export async function addResult(values,goals) {
  console.log(values);
  console.log(goals);

  try {
    if (values) {
      const { data } = await axios.post("/admin/addResult", { values,goals });
    } else {
      return Promise.reject({ error: "Couldn't Add Result.." });
    }
  } catch (error) {
    return Promise.reject({ error: "Couldn't Add Result.." });
  }
}