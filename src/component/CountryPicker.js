import React,{useState,useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import Styles from './CountryPicker.module.css';
import {fetchCountries} from '../api'
const CountryPicker = ({handleCountryChange}) =>{

    const [countryname,setCountryName] = useState([]);

    useEffect(()=>{
        const CountryAPI = async () =>{
            setCountryName(await fetchCountries());
        }
        CountryAPI();
    },[setCountryName]);

    // console.log(countryname);

    return(
        <div>
            <FormControl className={Styles.formcontrol}>
                <NativeSelect defaultValue='' onChange = { (event) => handleCountryChange(event.target.value)  } >
                    <option value="">Global</option>
                    {countryname.map((country,i)=> <option key={i} value={country}>{country}</option> )}
                </NativeSelect>
            </FormControl>
        </div>
    )
}
export default CountryPicker;