import React, { useEffect, useState } from "react";
import SearchForm from "./components/SearchForm";

function App() {
	const [search, setSearch] = useState("general");
	const [error, setError] = useState(null);
	const [news, setNews] = useState([]);

	useEffect(() => {
		const API = async () => {
			const ACCESS_KEY = "0e6e175dd41c2d17858fc545e6e9c571";
			const URI = `http://api.mediastack.com/v1/news?access_key=${ACCESS_KEY}&sources=bbc&categories=${search}&limit=10`;

			const res = await fetch(URI);
			const data = await res.json();
			if (data.hasOwnProperty("error")) {
				setError("News not Found");
				setNews([]);
				setTimeout(() => {
					setError(null);
				}, 3000);
				return;
			}
			setNews(data.data);
		};
		if (search !== "") {
			API();
		}
	}, [search]);
	return (
		<div className="container">
			<div className="table-bg"> 
				<h1 className="table__title">Responsive Table with ReacJS</h1>
				<SearchForm setSearch={setSearch} />
				{news.length ? (
					<div className="table-container">
						<table className="table">
							<thead className="table__head">
								<tr>
									<th>N°</th>
									<th>Title</th>
									<th>Description</th>
									<th>Source</th>
									<th>See More</th>
								</tr>
							</thead>
							<tbody className="table__body">
								{news.map((item, index) => (
									<tr key={index}>
										<td>{index + 1}</td>
										<td>{item.title}</td>
										<td>{item.description}</td>
										<td>{item.source}</td>
										<td>
											<a
												href={item.url}
												target="_blank"
												rel="noreferrer"
												className="button"
											>
												See More
											</a>
										</td>
									</tr>
								))}
							</tbody>
							<thead className="table__head">
								<tr>
									<th>N°</th>
									<th>Title</th>
									<th>Description</th>
									<th>Source</th>
									<th>See More</th>
								</tr>
							</thead>
						</table>
					</div>
				) : (
					<>{error && <p className="error">{error}</p>}</>
				)}
			</div>
		</div>
	);
}

export default App;
