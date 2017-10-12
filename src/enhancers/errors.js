
import * as React from 'react';
import _ from 'lodash';
import { SubmissionError } from 'redux-form'


const processErrorResponse = (error) => {
     //let arr = _.map(_.toPairs(error), d => _.fromPairs([d]))
    // Object.entries(arr).map((key) => {
    //     console.log(value)
    // })
    return Object.entries(error).map((key) => {
        //const key = key[0]==='email' ? 'email' : password
        return {
            [key[0]]: key[1][0]
        }
    })
}

export default processErrorResponse;