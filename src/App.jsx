
// import { useState } from 'react';
import { useState } from 'react';
import './App.css';
import Card from './Component/Card';
import Carosoul from './Component/Carosoul';
import Navbar from './Component/Navbar';
import obj from './data'
function App() {
  const [BeforeValue , NewValue]=useState('')
   const handleChange=(e)=>{
    console.log(e.target.value)
    NewValue(e.target.value)
   }
  return (
    <div className="App">
      <Navbar/>
      {/* <Carosoul image1='https://th.bing.com/th/id/OIP.3IuJbJXAsn6vNgdX12nNjAHaFO?w=1419&h=1001&rs=1&pid=ImgDetMain' image2='https://cdn.photographylife.com/wp-content/uploads/2014/06/Nikon-D810-Image-Sample-6.jpg' image3='https://th.bing.com/th/id/OIP.sT_2ykl1YMJDSv9MnK0W4wHaE7?rs=1&pid=ImgDetMain'/> */}
      <header className="App-header">
      {obj.map((e,index)=>(
       <Card key={index} title={e.name} data={e.data} image={e.img} btn={e.btn}/>
      ))}
      <input type='text' onChange={handleChange} />
      <h2>{BeforeValue}</h2>
      </header>
    </div>
  );
}

export default App;
