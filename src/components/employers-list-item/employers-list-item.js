import React, { Component } from "react";
import "./employers-list-item.css";

class EmployersListItem extends Component {
	// State
	constructor(props) {
		super(props);
		this.state = {
			salaryValue: this.getSalaryValueFromLocalStorage(props.id) || `${props.salary}$`, // Початкове значення поля вводу
		};
	}

	// Method

	getSalaryValueFromLocalStorage = (id) => {
		const storedValue = localStorage.getItem(`salaryValue-${id}`);
		return storedValue || null;
	};

	componentDidMount() {
		const { id } = this.props;
		const storedValue = this.getSalaryValueFromLocalStorage(id);
		if (storedValue) {
			this.setState({
				salaryValue: storedValue,
			});
		}
	}

	componentDidUpdate(prevProps, prevState) {
		const { id } = this.props;
		if (prevState.salaryValue !== this.props.salaryValue) {
			localStorage.setItem(`salaryValue-${id}`, this.state.salaryValue);
		}
	}

	handleInputChange = (e) => {
		this.setState({ salaryValue: e.target.value });
	};

	// Render

	render() {
		const { name, onDelete, onToggleProp, increase, rise } = this.props;

		let classNames = "list-group-item d-flex justify-content-between";

		if (increase) {
			classNames += " increase";
		}
		if (rise) {
			classNames += " like";
		}

		return (
			<li className={classNames}>
				<span className="list-group-item-label" data-toggle="rise" onClick={onToggleProp}>
					{name}
				</span>
				<input
					type="text"
					className="list-group-item-input"
					value={this.state.salaryValue}
					onChange={this.handleInputChange}
				/>

				<div className="d-flex justify-content-center align-items-center">
					<button
						type="button"
						className="btn-cookie btn-sm"
						data-toggle="increase"
						onClick={onToggleProp}
					>
						<i className="fas fa-cookie"></i>
					</button>
					<button
						type="button"
						className="btn-trash btn-sm"
						onClick={() => onDelete(this.props.id)}
					>
						<i className="fas fa-trash"></i>
					</button>
					<i className="fas fa-star"></i>
				</div>
			</li>
		);
	}
}

export default EmployersListItem;
