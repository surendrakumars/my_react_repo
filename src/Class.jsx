import React from 'react';

class MyClassComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {value:0,newVal:0};
    }
    render(){
        return(
            <div>
                <h1>hello how are you doing</h1>
            </div>
        )
    }
    componentDidMount(){
        console.log("component successfully mounted");
    }
}
export default MyClassComponent;