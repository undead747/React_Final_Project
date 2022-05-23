import Axios from "axios"
import { RestUrls } from "./urls"

export class RestDataSource {
    getData = (dataType, params) => 
        this.sendRequest("get", RestUrls[dataType], params)

    sendRequest = (method, url, params) => Axios.request({method, url, params})
}