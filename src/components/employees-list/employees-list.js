import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleRise, onUpdateSalary}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem
            key={id}
            id={id}
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleIncrease={() => onToggleIncrease(id)}
            onToggleRise={() => onToggleRise(id)}
            onUpdateSalary={onUpdateSalary}/>
        )
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;