import React , { Component} from 'react';
import {connect} from 'react-redux';
import { SelectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

 class BookList extends Component{
 render(){
     return(<ul className="list-group col-sm-4">
         {this.booklist()}
         </ul>)
 }

 booklist() {
    //  console.log("this.props",this.props)
 return (this.props.Books.map((Book)=>{
     return(<div key={Book.title} onClick={()=>this.props.SelectBook(Book)} className="listDiv">
         <li className="list-group-item"  >
         {Book.title}
         </li>
         </div>
         )

        }) 
);   
 }
}

function  MapToProps (state)
{
    console.log(">>>>>>>>>>",state)
return ({Books : state.Books})
}


function MapDispatchToProps (dispatch){
return  bindActionCreators({SelectBook : SelectBook},dispatch)
}

 export default connect (MapToProps ,MapDispatchToProps)(BookList)