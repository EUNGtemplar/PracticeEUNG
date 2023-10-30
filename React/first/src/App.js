import './App.css';
import React, {Component} from 'react';
import MyComponent_f from './classComponents/MyComponent_f';
import MyCompState from './classComponents/MyCompSatate';
import MyCompState2 from './classComponents/MyCompSatate2';
class App extends Component{
    render(){
        const name = 'React class';
        const teacher = "현응쌤";
        return(
            <div>
                <div className='react'>{name}</div>
                <MyComponent_f name={name} teacher={teacher}/>
                <MyCompState/>
                <MyCompState2/>
            </div>
        );
    }
}

export default App;