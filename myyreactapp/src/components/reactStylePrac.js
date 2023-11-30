import React from 'react';
import "./styles.css";
const date=new Date();
const currentTime=date.getHours();

let greeting;

const customStyle={
    color:""
}

if(currentTime<12)
{
    greeting="Good Morning";
    customStyle.color="red";
}
else if(currentTime<18){
    greeting="Good Afternoon";
    customStyle.color="green";
}
else{
    greeting="Good Night";
    customStyle.color="blue";
}

export const GreetingsComponent = () => {
    return (
    <>
    <div>
    <h1 className='blah' style={customStyle}>{greeting}</h1>
    
    </div>
    </>
    )

}

//export default GreetingsComponent;