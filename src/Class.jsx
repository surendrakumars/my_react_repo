import React from 'react';

class MyClassComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {value:0,newVal:0};
    }
    render(){
        return(
            <div>
                <button onClick={()=>this.setState({value:this.state.value+1})}
                >+</button>
                <p name="value">{this.state.value}</p>
                <button onClick={()=>this.setState({value:this.state.value-1})}
                >+</button>
                <p name="newVal">{this.state.newValue}</p>
            </div>
        )
    }
}
export default MyClassComponent;