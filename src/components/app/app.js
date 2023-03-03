import {Component} from "react";
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Юрий Гагарин', salary: 92500, increase: false, rise: true, id: 1},
                {name: 'Инесса Шевчук', salary: 74300, increase: true, rise: false, id: 2},
                {name: 'Дмитрий Пучков', salary: 68400, increase: false, rise: false, id: 3}
            ]
        }
        this.maxId = this.state.data.length;
    }
    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }
    addItem = (name, salary) => {
        this.maxId++;
        console.log(name, salary)
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId
        };
        this.setState(({data}) => {
            return {
                data: [...data, newItem]
            }
        })
    }
    render() {
        return (
            <div className="app">
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList
                    data={this.state.data} onDelete={this.deleteItem}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;
