import {
    useState,
    useEffect
} from 'react'
import axios from 'axios';
import fakeData from '../data/mockAccuWeatherData.json'

const useForecast = () => {
    const [data, setData] = useState(fakeData);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const url = 'https://dataservice.accuweather.com//forecasts/v1/daily/5day/328328?apikey=hsWapUY4DWBGefQtsAoL4vQ09CwTAMo8&metric=true'

    useEffect(() => {
    const fetchData = async () => {
        setIsError(false);
        setIsLoading(true);
        try {
          const result = await axios(`${proxyUrl}${url}`);
          setData(result.data);
        } catch (error) {
          setIsError(true);
        }
        setIsLoading(false);
      };
      fetchData();
    }, [])

    return { data, isLoading, isError };
};



export default useForecast