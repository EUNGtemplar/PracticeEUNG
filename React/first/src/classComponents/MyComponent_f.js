import React from "react"

const MyComponent_f = (props)=>{
    const {name, teacher, ch} = props;
    return (
        <div>

        <div>
            {props.name} - My Component(함수명) - {props.ch} - {props.teacher}
        </div>
        
        <div>
            {name} - My Component(함수명) - {ch} - {teacher} 
        </div>

        </div>

    );
}
MyComponent_f.defaultProps = {ch:'1장'}

export default MyComponent_f;