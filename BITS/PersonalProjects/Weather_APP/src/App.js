import logo from './logo.svg';
import { useState } from 'react'
// import './App.css';
// import './'
import './style.scss';

function App() {

  const [count, setCount] = useState(0)
  const [resourseType,setResourseType]=useState('posts');
  // const [click,setClick]=useState(false);
  const[data,setData]=useState({
    main:{temp:0, humidity:0,feels_like:0},
    wind:{speed:0}
  });
  const[location,setLocation]=useState('');
  // const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=87e7a1f71f9796e9acf373a1ef90ff51`;
  const fakeData=`https://jsonplaceholder.typicode.com/${resourseType}`

  //////////////////////


  const fetchData=(event)=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=87e7a1f71f9796e9acf373a1ef90ff51`)
    .then(response=>response.json())
    .then(json=>{
      console.log(json)
      setData(json)
    })
    .catch(err=>console.log("error"+err))
  }


  return (
    <>
    <div className="app">
        <div className="container">
          <div className='search'>
            <input className="text" type="text" value={location} placeholder='Enter City' onChange={(e)=>setLocation(e.target.value)}></input>
            <button className="button" onClick={fetchData}>Search</button>
          </div>
          <div className='info'>
            <div className='top'>
              <div className='Location'>
                {location}
              </div>
              <div className='Temperature'>
                {data.main.temp}°C
              </div>
              <div className='Weather'>
                {/* <img src='' alt='Sun'></img> */}
              </div>
            </div>
            <div className='foot'>
              <div className='feelsLike'>
                <div>{data.main.feels_like} °C</div>
                <div>Feels Like</div>
              </div>
              <div className='Humidity'>
                <div>{data.main.humidity} %</div>
                <div>Humidity</div>
              </div>
              <div className='windSpeed'>
                <div>{data.wind.speed} MPH</div>
                {/* <br></br> */}
                <div>Wind Speed</div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
  </>
  );
}

export default App;
