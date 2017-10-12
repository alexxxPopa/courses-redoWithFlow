
import * as React from 'react';



const processErrorResponse = (error) => {
    return Object.entries(error).map((key) => {
        return {
            [key[0]]: key[1][0]
        }
    })
}

export default processErrorResponse;