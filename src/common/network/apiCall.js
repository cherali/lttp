import { put } from 'redux-saga/effects'
import axios from 'axios'



function* apiCall({ method, url, successType, failType, bodyParams, headerParams }) {
  const headers = {
    'accept': 'application/json',
    ['Content-Type']: 'application/json',
    ...headerParams,
  }


  try {
    const res = yield axios({
      method: method,
      headers,
      data: bodyParams,
      url,
    })

    yield put({ type: successType, payload: res.data })

  } catch (err) {
    // need err.request.readyState //4= resolve
    // need err.request.status // the status code 404,403,... // 0= network connection err

    // send a failType to reducers
    yield put({ type: failType })

    // log error
    console.log('err', JSON.stringify(err))
  }
}

export default apiCall;