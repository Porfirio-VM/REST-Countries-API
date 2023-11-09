// API´S URL

export const API_URL_ALL =  'https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,population,region';

export const API_URL_BY_NAME = (name) => `https://restcountries.com/v3.1/name/${name}?fields=name,flags,population,region,subregion,capital,currencies,languages,borders`;

export const API_URL_BY_CODE = (code) => `https://restcountries.com/v3.1/alpha?codes=${code}`

export const API_URL_BY_REGION = (region) => `https://restcountries.com/v3.1/region/${region}?fields=name,flags,population,region,subregion,capital,currencies,languages,borders`

export const REGIONS = ["ALL","Americas","Africa","Antarctic","Oceania","Europe"]