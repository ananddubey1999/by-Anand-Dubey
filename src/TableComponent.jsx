import React, { useState, useEffect } from "react";

const fetchData = async () => {
  const response = await fetch("https://coralmango.com/api/react-test");
  const data = await response.json();
  return data;
};

const TableComponent = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortKey, setSortKey] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    fetchData().then((data) => {
      setData(data);
      setFilteredData(data);
    });
  }, []);

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

  const handleSort = (key) => {
    let sortedData = [...filteredData];
    sortedData.sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });
    setFilteredData(sortedData);
    setSortKey(key);
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
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("name")}>
              Name {sortKey === "name" && "▼"}
            </th>
            <th onClick={() => handleSort("age")}>
              Age {sortKey === "age" && "▼"}
            </th>
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
    </div>
  );
};

export default TableComponent;
