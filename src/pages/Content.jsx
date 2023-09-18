import React, { useState } from 'react';
import Box from '../components/Box';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Clock from '../components/Clock';



const Wrapper = styled.section`
display: flex;
width: 100%;
justify-content: center;
text-transform: uppercase;
.inputData{
    width: 50%;
   
    display: block;

    .time{
        display: flex;
        justify-content: space-around;
        padding: 2rem;
        gap: 1rem;
        height: 21rem;
    }

    .inputdiv{
        display: flex;
        justify-content: center;
        align-items: center;
    .input{
        
        height: 10rem;
        width: 20rem;
        border: none;
        margin: 2rem;
    }
    .addButton{
        font-size: 2rem;

    }
    .addButton:hover{
        cursor: pointer;
    }
}
}  

.mainbox{
    width: 50%;
    display: flex;
    justify-content: center;
  
.box{
    
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    width: max-content;
    border: none;
    

    .boxdiv{
        padding: 2rem;
        display: inverse-block;
        
        .button{
            padding: 5px 15px;
            width: 100%;
           
        }
        .button:hover{
            color: white;
            background-color: red;
        }
    }

}
}

@media(max-width: 1900px){
    
    .mainbox{
       
      
    .box{
        
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        width: max-content;
        border: none;
    }
}
        
}

@media(max-width: 1310px){
    
    .mainbox{
    .box{
        
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        align-items: center;
        width: max-content;
        border: none;
    }
}
        
}
@media(max-width: 1100px){
    display: block;
    .inputData{
        width: 100%
        
    }
    .mainbox{
       width: 100%;
      
    .box{
        
        grid-template-columns: repeat(2, 1fr);
      
    }
}
        
}
@media(max-width: 662px){
    .inputData{
      display:flex;
      justify-content: center;
       .time{
        padding: 1rem;
        display: block;
        
        
       }
       .inputdiv{
        display: block;
        .addButton{
            text-align: center;
            margin-top: -2rem;
           
        }
        
       }
        
    }
    .mainbox{ 
    .box{
        grid-template-columns: repeat(1, 1fr);
    }
}
        
}
`


const Content = () => {

   


    const [data , setData] = useState("");
    const [list , setList] = useState([]);
 
  

    const itemevent = (e) =>{
        setData(e.target.value);
       
        }  

    const updateitem = () =>{
      return (
      setList((items)=>{return [...items, data]})
      )}  
   
      const deletei = (id) =>{
        setList((items)=>{
         return  items.filter((cur, index)=> {
         return id!==index 
      })
    })}
   
     
    
  return (
    <Wrapper>
        <div className='inputData'>
            <div>
        <div className='time'>
            <Clock className="timer" />
            <Calendar />
        </div>
        <div className='inputdiv'>
        <input type='text' placeholder='ADD TASK HERE'  className='input' id='data' onChange={itemevent}></input>
        <p  className='addButton' onClick={updateitem}>CLICK TO ADD</p>
        </div>
        </div>
        </div>
        <div className='mainbox'>
        <div className='box'>
        {list.map((cur,index)=> {
        return (
         <div className='boxdiv'>
            <button className='button' key={index} onClick={()=>deletei(index)}>REMOVE</button>
            <Box key={index} value={cur}/>
          </div>   
        
        )})}
        </div>
        </div>
    </Wrapper>
  )
}

export default Content;