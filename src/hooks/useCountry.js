import { useMemo, useEffect, useContext, useState } from 'react';
import { CountryContext } from './CountryProvider';
import { API_URL_ALL, API_URL_BY_NAME, API_URL_BY_REGION } from '../constants/constants';

function useCountry() {
  const [search, setSearch] = useState('');
  const [filteredRegion, setFilteredRegion] = useState()
  const { countryList, setCountryList } = useContext(CountryContext);

  // Función para realizar solicitudes a la API
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setCountryList(data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // Primer renderizado de todos los países.
    fetchData(API_URL_ALL);
  }, [setCountryList]);

  useEffect(() => {
    if (search && search.length > 2) {
      // Realizar búsqueda por nombre si se ingresan al menos 3 caracteres.
      fetchData(API_URL_BY_NAME(search));
    } else if (search === '') {
      // Restaurar la lista completa de países si el campo de búsqueda se borra.
      fetchData(API_URL_ALL);
    }
  }, [search, setCountryList]);

  useEffect(() => {
    if (filteredRegion) {
      if (filteredRegion === "ALL") {
        fetchData(API_URL_ALL);
      } else {
        fetchData(API_URL_BY_REGION(filteredRegion));
      }
    }
  }, [filteredRegion])
  

  const searchCountry = (e) => {
    const searchValue = e.target.value.trim();
    if (searchValue.startsWith(' ')) return;
    setSearch(searchValue);
  };

  const filterByRegion = (e) =>{
    const filterValue = e.target.value;
   setFilteredRegion(filterValue)
  }

  const countryListMemo = useMemo(() => {
    return countryList;
  }, [countryList]);

  return { countryList: countryListMemo, searchCountry , filterByRegion};
}

export default useCountry;
