// Import
import { Component } from "react";
//
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app.filter/app-filter";
import EmployersList from "../employers-list/employer-list";
import EmployersAddform from "../employers-add-form/employers-add-form";
//
import "./app.css";

//
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					name: "Emily Johnson",
					salary: 1200,
					increase: false,
					rise: false,
					id: 1,
				},
				{
					name: "David Anderson",
					salary: 2000,
					increase: false,
					rise: false,
					id: 2,
				},
				{
					name: "Michael Williams",
					salary: 2500,
					increase: false,
					rise: false,
					id: 3,
				},
			],
		};
		this.maxId = 4;
	}

	// Method

	deleteItem = (id) => {
		this.setState(({ data }) => {
			return {
				data: data.filter((item) => item.id !== id),
			};
		});
	};

	addItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			increase: false,
			rise: false,
			id: this.maxId++,
		};

		this.setState(({ data }) => {
			const newArr = [...data, newItem];
			return {
				data: newArr,
			};
		});
	};

	onToggleProp = (id, prop) => {
		this.setState(({ data }) => ({
			data: data.map((item) => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] };
				}
				return item;
			}),
		}));
	};

	//Render

	render() {
		const employees = this.state.data.length;
		const increased = this.state.data.filter((item) => item.increase).length;

		return (
			<div className="app">
				<AppInfo employees={employees} increased={increased} />

				<div className="search-panel">
					<SearchPanel />
					<AppFilter />
				</div>
				<EmployersList
					data={this.state.data}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
				/>
				<EmployersAddform onAdd={this.addItem} />
			</div>
		);
	}
}

export default App;
