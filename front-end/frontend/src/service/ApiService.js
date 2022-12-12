import axios from "axios";
const axiosInstance = axios.create({
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
  },
});
class ApiService {
  getOneNextJoke() {
    return axiosInstance.get(
      `http://localhost:5000/api/v1/joke/getOneNextJoke`
    );
  }
  getOneCurrentJoke() {
    return axiosInstance.get(
      `http://localhost:5000/api/v1/joke/getOneCurrentJoke`
    );
  }
  likeJoke(id) {
    return axiosInstance.patch(
      `http://localhost:5000/api/v1/joke/likeJoke/${id}`
    );
  }
  dislikeJoke(id) {
    return axiosInstance.patch(
      `http://localhost:5000/api/v1/joke/dislikeJoke/${id}`
    );
  }
}

export default new ApiService();
