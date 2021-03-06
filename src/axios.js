import axios from "axios";

//https://www.npmjs.com/package/axios
function axiosGet(url) {
  let result;
  axios
    .get(url)
    .then(function(response) {
      console.log(response);
      result = response;
    })
    .catch(function(error) {
      console.log(error);
      //result=error;
    });
  return result;
}

function axiosPost(url, data) {
  let result; //data in object={}
  let axiosConfig = {
    "Content-Type": "application/json;charset=UTF-8",
    Authorization: ""
  };
  axios
    .post(url, data, axiosConfig)
    .then(function(response) {
      console.log(response);
      result = response;
    })
    .catch(function(error) {
      console.log(error);
      //result=error;
    });
  return result;
}
export { axiosGet, axiosPost };
