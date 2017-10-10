import * as React from 'react';
import axios from 'axios'

const Request = async (url, method, body) => {
  response = await axios.method(url, body)
  return response
}