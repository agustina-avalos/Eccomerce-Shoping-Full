import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
/* const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWE2OGE2OD
IyOGY1Y2UxZDVmNGVmMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDI1OTc0NCwiZXhwIjoxNjY
wNTE4OTQ0fQ.Vzs5-AOPoYRKnKku3Xh57ni4weGBUUy_JWFfqx2jNuw"
 */


const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });
  
  export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
  }); 