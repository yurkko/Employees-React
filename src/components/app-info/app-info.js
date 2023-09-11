import "./app-info.css";

const AppInfo = (props) => {
	const { employees, increased } = props;

	return (
		<div className="app-info">
			<h1>
				Кількість працівників в компанії <span className="company">BizMind</span>
			</h1>
			<h2>Загальне число працівників: {employees}</h2>
			<h2>Премію получать: {increased}</h2>
		</div>
	);
};

export default AppInfo;
