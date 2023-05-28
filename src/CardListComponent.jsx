import React, { useState, useEffect } from "react";
import "./CardList.css";

const CardListComponent = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);
  const [viewType, setViewType] = useState("table");

  useEffect(() => {
    fetchData().then((data) => {
      setData(data);
      setFilteredData(data);
    });
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://coralmango.com/api/react-test");
    const data = await response.json();
    return data;
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);
    filterData(value);
  };

  const filterData = (value) => {
    if (value) {
      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(filtered);
      setIsFiltered(true);
    } else {
      setFilteredData(data);
      setIsFiltered(false);
    }
  };

  const handleToggle = () => {
    setViewType(viewType === "table" ? "card" : "table");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchText}
        onChange={handleSearch}
      />
      {isFiltered && <p>You are viewing filtered results.</p>}
      <button onClick={handleToggle}>
        Switch to {viewType === "table" ? "Card" : "Table"} View
      </button>
      <div className={viewType === "table" ? "table-view" : "card-list"}>
        {viewType === "table" ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Occupation</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.occupation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          filteredData.map((item, index) => (
            <div key={index} className="card">
              <h3>{item.name}</h3>
              <p>Age: {item.age}</p>
              <p>Occupation: {item.occupation}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CardListComponent;
