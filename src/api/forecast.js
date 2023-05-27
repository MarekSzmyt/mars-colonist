import {API_KEY, API_URL} from "./constants";

export const getForecast = successCallback => {
  fetch(API_URL, {
    headers: {
      "Authorization": API_KEY,
    }
  })
    .then(response => response.json())
    .then(data => {
      if (typeof successCallback === "function") {
        successCallback(data);
      }
    })
    .catch(err => console.log(err));
};
