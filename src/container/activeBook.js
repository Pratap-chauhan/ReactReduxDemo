import React , { Component } from 'react';
import {connect} from 'react-redux';


 class SelectedBook extends Component {
render(){
    console.log(">>activeBook",this.props)
    return(this.props.ActiveBook ? <div >
        {this.props.ActiveBook.payload.title}
        </div>:null
        )
}
}


function MapToProps(state){
    console.log(">>>act",state)
return state
}

export default connect (MapToProps)(SelectedBook)