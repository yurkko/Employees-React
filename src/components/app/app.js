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
			term: "",
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

	searchEmp = (items, term) => {
		if (term.length === 0) {
			return items;
		}

		return items.filter((item) => {
			return item.name.indexOf(term) > -1;
		});
	};

	onUpdateSearch = (term) => {
		this.setState({
			term: term,
		});
	};

	//Render

	render() {
		const { data, term } = this.state;
		const employees = data.length;
		const increased = data.filter((item) => item.increase).length;
		const visibleData = this.searchEmp(data, term);

		return (
			<div className="app">
				<AppInfo employees={employees} increased={increased} />

				<div className="search-panel">
					<SearchPanel onUpdateSearch={this.onUpdateSearch} />
					<AppFilter />
				</div>
				<EmployersList
					data={visibleData} // Передайте дані у властивість data
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
				/>

				<EmployersAddform onAdd={this.addItem} />
			</div>
		);
	}
}

export default App;
