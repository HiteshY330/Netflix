import React from "react";
import Card from './Card';
import Sdata from './Sdata';



const App=() =>(
    <>
    <h1 className='heading_style'> List Of Top 5 Netflix Series In 2022</h1>

    {Sdata.map((val, index)=>{

    return(
        <Card  
        key={val.id}
        imgsrc={val.imgsrc} 
        title={val.title} 
        sname={val.sname} 
        link={val.link}
       />
    );
})};
</>
);

export default App;

