import React from 'react';

class MyClassComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {message:"this is a hello from class component"};
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <p>Props value: {this.props.name}</p>   
            </div>
        )
    }
}
export default MyClassComponent;