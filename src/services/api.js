// import axios from 'axios';
// import apiInfo from './apiInfo';
// export const fetchInfo = async (ipAdr, apiKey) => {
//   const { data } = await axios.get(apiInfo.BASE_URL, {
//     params: { address: ipAdr },
//     headers: {
//       'X-Api-Key': apiKey,
//       'Content-Type': 'application/json',
//     },
//   });
//   return data;
// };

import axios from 'axios';
import apiInfo from './apiInfo';
export const fetchTextfromImg = async (file, apiKey) => {
  const formData = new FormData();
  formData.append('image', file);

  const { data } = await axios.post(apiInfo.BASE_URL, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'X-Api-Key': apiKey,
    },
  });
  console.log(data)
  return data;
};
