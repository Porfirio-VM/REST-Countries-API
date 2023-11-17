import { useMemo, useEffect, useContext, useState, useRef } from 'react';
import { API_URL_ALL, API_URL_BY_NAME, API_URL_BY_REGION } from '../constants/constants';

function useCountry() {
  const [countryList, setCountryList] = useState([])
  const isFirstInput = useRef(true)
  const [initialFetchDone, setInitialFetchDone] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredRegion, setFilteredRegion] = useState()

  // Función para realizar solicitudes a la API
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        const slicedData = data.slice(0, 100)
        setCountryList(slicedData);
        setInitialFetchDone(true);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const firstCountryRender = useMemo(() =>{
    if(!initialFetchDone){
       fetchData(API_URL_ALL)
    }
    return countryList
  },[initialFetchDone])


  useEffect(() => {
    if(isFirstInput.current){
      isFirstInput.current = search === ''
      return
    }
      if (search && search.length >= 3) {
        // Realizar búsqueda por nombre si se ingresan al menos 3 caracteres.
        fetchData(API_URL_BY_NAME(search));
      }else{
        // Restaurar la lista completa de países si el campo de búsqueda se borra.
        setCountryList(firstCountryRender)
      }
  }, [search]);

  useEffect(() => {
    if (filteredRegion) {
      if (filteredRegion === "ALL") {
        setCountryList(firstCountryRender)
      } else {
        fetchData(API_URL_BY_REGION(filteredRegion));
      }
    }
  }, [filteredRegion])
  

  const searchByName = (e) => {
    const searchValue = e.target.value.trim();
    if (searchValue.startsWith(' ')) return;
    setSearch(searchValue);
  };

  const searchByRegion = (e) =>{
    const filterValue = e.target.value;
    setFilteredRegion(filterValue)
  }

  return { countryList, searchByName, searchByRegion};
}

export default useCountry;
