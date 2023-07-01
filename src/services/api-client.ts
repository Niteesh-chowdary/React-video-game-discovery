import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next:string|null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e00b611c8de043cb9a44f91e6bc90226",
  },
});

class APIClient<T> {
  endpoint: string;
  constructor(ep: string) {
    this.endpoint = ep;
  }
  getAll = (config?: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  get =(id:number | string)=>axiosInstance.get<T>(this.endpoint+'/'+id).then(res=>res.data)
}

export default APIClient;
