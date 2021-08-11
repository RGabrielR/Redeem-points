import * as t from '../types';
import {fetchUser} from './userActions';

export const redeemProduct = id => {
return async (dispatch) => {
    await fetch('https://coding-challenge-api.aerolab.co/redeem',
          {
            method: 'POST',
           headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGYyMDYzZDY3Mjk2ZTAwMTk5NjQxM2QiLCJpYXQiOjE2MjY0NzQwNDV9.O1AbUIcgu_75ULZWX2AzbliYXapEYijzL89mPB05R7s',
            "Content-Type": "application/json",
            'Accept': 'application/json'
          },
           body: JSON.stringify({"productId": id})
          }
          );
           console.log(id);
           dispatch(fetchUser());
  }
 
}
