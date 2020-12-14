import axios from "axios";

const network = axios.create({});

const getToken = () => {
  return localStorage.getItem("accessToken");
};

network.interceptors.request.use((config) => {
  // Do something before request is sent
  config.headers["authorization"] = "bearer " + getToken();
  return config;
});

network.interceptors.response.use(
  (config) => {
    console.log("RESPONSE", config);
    return config;
  },
  (error) => {
    if (error.response.status === 403) {
      window.location = '/login';
    }
    const originalRequest = error.config;
    let refreshToken = localStorage.getItem("refreshToken");
    if (
      refreshToken &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      return axios
        .post(`api/users/token`, { refreshToken: refreshToken })
        .then((res) => {
          console.log("res", res);
          if (res.status === 200) {
            localStorage.setItem("accessToken", res.data.accessToken);
            console.log("Access token refreshed!");
            return axios(originalRequest);
          }
        })
        .catch((err) => {
          console.log('err',err)
        });
    }
    return Promise.reject(error);
  }
);

export default network;
