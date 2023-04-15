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
                {name: 'Дмитрий Менделеев', salary: 92500, increase: false, rise: true, id: 1},
                {name: 'Инесса Смирнова', salary: 74300, increase: true, rise: false, id: 2},
                {name: 'Григорий Перельман', salary: 68400, increase: false, rise: false, id: 3}
            ],
            term: '',
            filter: 'all'
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
    onToggleIncrease = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item;
            })
        }))

    }
    onToggleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, rise: !item.rise}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) return items;
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    } // 2) Получаем данные из onUpdateSearch, фильтруем и отдаем массив в метод render

    onUpdateSearch = (term) => {
        this.setState({term: term});
    } // 1) Получаем данные из input

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThen1000':
                return items.filter(item => item.salary > 70000);
            default:
                return items;
        }
    }
    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    onUpdateSalary = (id, salary) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, salary: salary}
                }
                return item;
            })
        }))
        console.log(this.state.data)
    }

    render() {
        const {data, term, filter} = this.state
        const increase = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter); // Сперва поиск, затем фильтрация
        return (
            <div className="app">
                <AppInfo count={this.state.data.length} increase={increase}/>

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}
                    onUpdateSalary={this.onUpdateSalary}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;
