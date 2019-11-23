import axios from "axios";
var tok =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiNWRiM2Q3ZTIzZGJlMTYyNzQ2ZjRlNGRlIiwiaWF0IjoxNTcyMDg4NDAyLCJleHAiOjE2MDM2MjQ0MDJ9.WNKSQ06JoKvgXkWUjPIJmWj8igOHRaIvEIn3FRDquvU";
export function getAllProducts() {
  return axios
    .get("http://localhost:4000/product/getProducts", {
      headers: {
        token: tok
      }
    })
    .then(res => {
      return res;
    })
    .catch(err => {
      return err;
    });
}
export async function addProducts(data) {
  console.log("data in add servicdes", data);
  for (var pair of data.entries()) {  
    console.log(pair[0] + ", " + pair[1]);
  }
  var headers = {
    "Content-Type": "multipart/form-data",
    "token": tok
  };
  let res=await axios
    .post("http://localhost:4000/image/image-upload", data, {
      headers: headers
    })
    return res;
    // .then(res => {
    //   console.log("data in add res", res);
    //   return res;
    // })
    // .catch(err => {
    //   console.log("data in add err", err);
    //   return err;
    // });
}
