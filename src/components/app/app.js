import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {
    const data = [
        {name: 'Юрий Гагарин', salary: 92500, increase: false, rise: true, id: 1},
        {name: 'Инесса Шевчук', salary: 74300, increase: true, rise: false, id: 2},
        {name: 'Дмитрий Пучков', salary: 68400, increase: false, rise: false, id: 3}
    ]
    return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>

        <EmployeesList data={data}/>
        <EmployeesAddForm/>
    </div>
    );
}

export default App;
