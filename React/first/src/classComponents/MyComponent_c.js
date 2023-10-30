import React, {Component} from "react";

class MyComponent_c extends Component{
    static defaultProps = { name : '리액트', ch:'1장'}
    
    render(){
        const {name, teacher, ch} = props;
        return (
            <div>
    
            <div>
                {props.name} - My Component(클래스) - {props.ch} - {props.teacher}
            </div>
            
            <div>
                {name} - My Component(클래스) - {ch} - {teacher} 
            </div>
    
            </div>
    
        );
    }
}


export default MyComponent_c;