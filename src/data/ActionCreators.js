import { ActionTypes } from "./Types"
import {data as phData} from "./placeholderData"
import { RestDataSource } from "./RestDataSource"

const dataSource = new RestDataSource()

export const loadData = (dataType, params) => ({
    type: ActionTypes.DATA_LOAD,
    payload: dataSource.getData(dataType, params).then(result => {
        return {
            dataType,
            data: result.data,
            total: Number(result.headers["x-total-count"]),
            params
        }
    })
})