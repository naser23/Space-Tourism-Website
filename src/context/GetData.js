import { createContext, useEffect } from "react";

const GetData = createContext();

export function GetDataProvider() {
  async function retrieveData() {
    const settings = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    const fetchResponse = await fetch("data.json", settings);
    console.log(fetchResponse);
  }

  retrieveData();
}

export default GetData;
