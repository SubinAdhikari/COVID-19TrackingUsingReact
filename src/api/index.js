import axios from 'axios';

const url='https://covid19.mathdro.id/api';

export const fetchData = async (country) =>{
    
let changableUrl= url;

    if(country){
        changableUrl = `${url}/countries/${country}`;
    }

    try {
        const {data : {confirmed,recovered,deaths,lastUpdate}} = await axios.get(changableUrl);    //Destructuring the response and only returning data:confirmed,recovered,deaths,lastupdate
        
        // const ModifiedData={
        //     confirmed:confirmed,
        //     recovered:recovered,
        //     deaths:deaths,
        //     lastUpdate:lastUpdate
        // }
        // return ModifiedData;

        return {confirmed,recovered,deaths,lastUpdate};                             //Since key and value will be same we directly return it without storing in a value
   
    } catch (error) {
        console.log(error);
    }

}


export const fetchDailyData = async () =>{
    try {
        const {data} = await axios.get(`${url}/daily`);

       const ModifiedData=data.map((dailyData)=>({
        confirmed:dailyData.confirmed.total,
        deaths:dailyData.deaths.total,
        date:dailyData.reportDate,
       }));

       return ModifiedData;
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () =>{
    try {
        
        const {data : {countries}} = await axios.get(`${url}/countries`)
        // console.log({countries});
        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error)
    }
}





