import React, {Component} from 'react';

class SearchBar  extends Component {
    state = { term: ''};

    onInputChange = (event) => {
        this.setState({ term: event.target.value })
    }

    onFromSubmit = event => {
        event.preventDefault();
        this.props.searchByKeyword(this.state.term)
    }

    render(){
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit= {this.onFromSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value= {this.state.term} onChange= {this.onInputChange} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;