import axios, {
    AxiosError,
    AxiosRequestConfig,
    AxiosRequestHeaders,
    AxiosResponse
  } from 'axios';
  import {BASE_URL} from "@env"
  import { useSelector, useDispatch } from 'react-redux';
  import { memo, useEffect, useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { hide, show } from '../../redux/reducers/spinner';
import { showToastMsg } from '../../helper';
console.log({BASE_URL})
  let http = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "accept": 'application/json',
      }
  });
  
  const parseErrorMessage = (errResponse) => {
    console.log('errResoponse', errResponse);
    return errResponse?.data ? errResponse.data?.errors[0] : '';
  };
  
  const AxiosInstance = memo(({ children }) => {
    const dispatch = useDispatch()
    const [isSet, setIsSet] = useState(false);
    const navigate = useNavigation();

  
    useEffect(() => {
      const reqInterceptor = (config) => {
        console.log('reqInterceptor', config)
        dispatch(show())
        return config;
      };
  
      const resInterceptor = (response) => {
        dispatch(hide())
        console.log('resInterceptor', response)
        return response;
      };
  
      const errInterceptor = (error) => {
        dispatch(hide())
        const message = parseErrorMessage(error.response);
        if (message) {
          error.message = message;
        }
        if (error.response?.status === 401) {
          // setTimeout(() => {
          //   navigate('login');
          // }, 3000);
        }
        showToastMsg("error", error?.message || "Something went wrong")
        return Promise.reject(error);
      };
  
      const interceptorReq = http.interceptors.request.use(
        reqInterceptor,
        (error) => {
          console.log('interceptor req error', error);
          return Promise.reject(error);
        }
      );
  
      const interceptorRes = http.interceptors.response.use(
        resInterceptor,
        errInterceptor
      );
      setIsSet(true);
      return () => {
        http.interceptors.request.eject(interceptorReq);
        http.interceptors.response.eject(interceptorRes);
      };
    }, [isSet, navigate]);
    return isSet && children;
  })
  
  export default http;
  export { AxiosInstance };
  
  