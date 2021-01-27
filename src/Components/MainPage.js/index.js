import React from 'react'
import Loading from '../Loading/'


export default class MainPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            loading:true
        }
    }
    componentDidMount(){}


    render(){
        const {loading}=this.state
        return(<h1>this is the main page</h1>)
        
        
    }
}