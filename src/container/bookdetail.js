import React , {Component} from 'react';
import {connect} from 'reat-redux'

export class BookDetail extends Component {

    render(){
        return(
            <div className="Col-md-3">
            {this.props.SelectedBook.title}
           </div>
        )
    }

}

// export default