import axios from "axios";

export interface FetchResponse<T>{
    count: number;
    results: T[];
  }

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:'e00b611c8de043cb9a44f91e6bc90226'
    }
})