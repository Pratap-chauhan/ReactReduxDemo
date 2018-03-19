import React , {Component} from 'react';

export class BookDetail extends Component {

    render(){
        return(
            <div className="Col-md-3">
            {this.props.SelectedBook.title}
           </div>
        )
    }

}