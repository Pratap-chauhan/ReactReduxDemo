import react , { Component} from 'react';
import {connect} from 'react-redux';


 class BookList extends Component{
 render()
 {
     return(<ul>
         {this.booklist()}
         </ul>)
 }

 booklist() {
 this.props.books.map(()=>{
     return(<li>{books.title}</li>)
 })    
 }



}

function  MapToProps (state)
{
return ({books : state.books})
}

 export default connect (MapToProps)(BookList)