import React, { useState } from "react";
import propTypes from "prop-types";

export default function SearchForm({ setSearch }) {
	const [text, setText] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (text.trim() === "") {
			return;
		}
		setSearch(text);
	};
	return (
		<>
			<form className="form" onSubmit={handleSubmit}>
				<div className="form__input">
					<input
						type="text"
						placeholder="general,business,entertainment,health"
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
				</div>
			</form>
		</>
	);
}

SearchForm.propTypes = {
    setSearch: propTypes.func.isRequired
}