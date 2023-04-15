import {Component} from "react";
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }
    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onFormSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length < 2 || this.state.name > 20 || !this.state.salary) return
        this.props.onAdd(this.state.name, this.state.salary)
        this.setState({
            name: '',
            salary: ''
        })
    }
    render() {
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex flex-wrap" onSubmit={this.onFormSubmit}>
                    <div className="container-fluid p-0">
                        <div className="row gap-md-0 gap-3">
                            <div className="col-md-5">
                                <input type="text"
                                       className="form-control new-post-label"
                                       placeholder="Имя сотрудника" name='name' value={name} onChange={this.onValueChange}/>
                            </div>
                            <div className="col-md-5">
                                <input type="number"
                                       className="form-control new-post-label"
                                       placeholder="Заработная плата" name='salary' value={salary} onChange={this.onValueChange}/>
                            </div>
                            <div className="col-md-2">
                                <button type="submit"
                                        className="btn btn-outline-light w-100">Добавить</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;