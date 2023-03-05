import "./app-info.css";

const AppInfo = ({count, increase}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников «Сибакадемстрой»</h1>
            <h2>Общее число сотрудников: {count}</h2>
            <h2>Премию получат: {increase}</h2>
        </div>
    )
}

export default AppInfo;