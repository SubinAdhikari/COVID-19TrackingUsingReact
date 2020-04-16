import React,{Component} from 'react';
import logo from './logo.svg';
// import './App.css';
import Cards from './component/Cards';
import Chart from './component/Chart';
import CountryPicker from './component/CountryPicker';
import {fetchData} from './api';
import Styles from './App.module.css';
import COVID19 from '../src/images/imageCOVID19.png';

class App extends Component{
  // constructor(props){
  //   super(props);
  // }

  state={
    data : {},
    country: '',
  }


 async componentDidMount(){
const fetchedData = await fetchData();
this.setState({data: fetchedData});

}

handleCountryChange = async (country) =>{
  // console.log(country);
    //fetch country
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
    this.setState({data: fetchedData, country : country});
}

  render(){ 
    const {data,country} = this.state; //destructuring the this.state.data and send this data in cards as a props
    
    return(
      <div className={Styles.container}>
        <img src={COVID19} className={Styles.image} alt='COVID19IMG'/>
        <Cards data={data}/> 
        <CountryPicker handleCountryChange={this.handleCountryChange}/>    
        <Chart data={data} country={country}/>
      </div>
    )
  }
}

export default App;
