import axios from 'axios';

export const galleries = async () => {
  //if(!ISCONNECT) return userInfoData;
  const options = {
    method: 'GET',
    url: `${process.env.REACT_APP_BASE_URL}/gallery/`,
    headers: {accept: 'application/json'},
    withCredentials: true,
  };

  try {
    const data = await axios(options);
    return data;
  } catch (err) {
    console.log('galleries err: ', err);
    return null;
  }
};

export const cardByGallId = async (id: number) => {
  //if(!ISCONNECT) return userInfoData;
  const options = {
    method: 'GET',
    url: `${process.env.REACT_APP_BASE_URL}/gallery/${id}`,
    headers: {accept: 'application/json'},
    withCredentials: true,
  };

  try {
    const data = await axios(options);
    return data;
  } catch (err) {
    console.log('cardByGallId err: ', err);
    return null;
  }
};

export const addCardByGallId = async (id: number) => {
  //if(!ISCONNECT) return userInfoData;
  const options = {
    method: 'GET',
    url: `${process.env.REACT_APP_BASE_URL}/gallery/nft/${id}`,
    headers: {accept: 'application/json'},
    withCredentials: true,
  };

  try {
    const data = await axios(options);
    return data;
  } catch (err) {
    console.log('addCardByGallId err: ', err);
    return null;
  }
};

export const stake = async (id: number, unlockTime: number) => {
  //if(!ISCONNECT) return sellCardData;
  const options = {
    method: 'GET',
    url: `${process.env.REACT_APP_BASE_URL}/gallery/stake/${id}/${unlockTime}`,
    headers: {accept: 'application/json'},
    withCredentials: true,
  };

  try {
    const data = await axios(options);
    return data;
  } catch (err) {
    console.log('addCardRegi err: ', err);
    return null;
  }
};

export const addCardRegi = async (gallery_id: number, nft_id: number, nft_end_time: string) => {
  //if(!ISCONNECT) return sellCardData;
  const options = {
    method: 'POST',
    url: `${process.env.REACT_APP_BASE_URL}/gallery/nft`,
    headers: {accept: 'application/json'},
    withCredentials: true,
    data: {
      gallery_id: gallery_id,
      nft_id: nft_id,
      nft_end_time: nft_end_time,
    },
  };

  try {
    const data = await axios(options);
    return data;
  } catch (err) {
    console.log('addCardRegi err: ', err);
    return null;
  }
};
