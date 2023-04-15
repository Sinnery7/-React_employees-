import {Component} from "react";
import './employees-list-item.css';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            salary: props.salary + '₽'
        }
    }
    onUpdateSalary = (e) => {
        const salary = +(e.target.value.split('').filter(item => +item || +item === 0).join(''))
        this.setState({salary: salary + '₽'});
        this.props.onUpdateSalary(this.props.id, salary);
    }
    render() {
        const {name, onDelete, onToggleIncrease, onToggleRise, increase, rise} = this.props;

        let classNames = 'list-group-item d-flex flex-wrap justify-content-between';
        if (rise) {
            classNames += ' like'
        }
        if (increase) {
            classNames += ' increase';
        }
        return (
            <li className={classNames}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 col-6">
                            <span className="list-group-item-label" onClick={onToggleRise}>{name}</span>
                        </div>
                        <div className="col-lg-3 col-md-3 col-6">
                            <input type="text" className="list-group-item-input" value={this.state.salary} onChange={this.onUpdateSalary}/>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6 mt-md-0 mt-2">
                            <div className='d-flex justify-content-start justify-content-md-end align-items-center gap-md-0 gap-3'>
                                <button type="button"
                                        className="btn-cookie btn-sm "
                                        onClick={onToggleIncrease}>
                                    <i className="fas fa-cookie"></i>
                                </button>
                                <button type="button"
                                        className="btn-trash btn-sm "
                                        onClick={onDelete}>
                                    <i className="fas fa-trash"></i>
                                </button>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        )
    }

}

export default EmployeesListItem;