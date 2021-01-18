import axiosWithAuth from '../utils/axiosWithAuth';

const getColors = () => {
    axiosWithAuth()
      .get(`/colors`)
      .then((res) => {
        console.log(res);
        setColorList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

    export default getColors;