import { Component } from "react";
import "./employers-add-form.css";

class EmployersAddform extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			salary: "",
		};
	}

	// Method

	onValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		if (this.state.name < 3 || !this.state.salary) return;
		this.props.onAdd(this.state.name, this.state.salary);
		this.setState({
			name: "",
			salary: "",
		});
	};

	// Render

	render() {
		const { name, salary } = this.state;
		return (
			<div className="app-add-form">
				<h3>Добавьте нового сотрудника</h3>
				<form className="add-form d-flex" onSubmit={this.onSubmit}>
					<input
						type="text"
						name="name"
						value={name}
						placeholder="Как его зовут?"
						onChange={this.onValueChange}
						className="form-control new-post-label"
					/>
					<input
						type="number"
						name="salary"
						value={salary}
						placeholder="З/П в $?"
						onChange={this.onValueChange}
						className="form-control new-post-label"
					/>

					<button type="submit" className="btn btn-outline-light">
						Добавить
					</button>
				</form>
			</div>
		);
	}
}

export default EmployersAddform;
