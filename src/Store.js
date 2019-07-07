import axios from 'axios';

/**
 * Make a request to load all Posts.
 *
 * @returns {AxiosPromise<any>}
 */

export const API_KEY = '3968beae';
export const API_URL = `http://www.omdbapi.com?apikey=${API_KEY}`;

/*
 * Makes a get request and builds the query string based on an object.
 *
 * @param {object} args
 * @returns {AxiosPromise<any>}
 */

export const loadMedia = async ( { ...args } ) => {
  const queryString = Object.keys(args).map(arg => `${arg}=${args[arg]}`).join('&');
  return await axios.get(`${API_URL}&${queryString}`);
};
