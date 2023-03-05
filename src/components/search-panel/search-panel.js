import {Component} from "react";
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }
    onUpdateSearch = (e) => { // - локальная функция
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term)  // - приходит из app.js
    }
    render() {
        return (
            <input type="text"
                   className="form-control search-input"
                   placeholder="Найти сотрудника"
                   value={this.state.term}
                   onChange={this.onUpdateSearch}/>
        )
    }
}

export default SearchPanel;