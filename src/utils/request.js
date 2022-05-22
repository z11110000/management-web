import axios from 'axios';
import JSONBIG from "json-bigint";

const service = axios.create({
  baseURL: 'http://127.0.0.1:18080/',
  //解决超过16位数字丢失精度问题
  transformResponse: [
    function (data) {
      const json = JSONBIG({
        storeAsString: true
      })
      return json.parse(data);
    }
  ]

})

service.interceptors.request.use(config => {
  return config
})

service.interceptors.response.use(response => {
  return response.data;
})


export default service
