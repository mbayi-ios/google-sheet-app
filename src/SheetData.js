import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import { Table, Container, Responsive } from 'semantic-ui-react';

const SheetData = () => {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/86247ce9-875e-4bd8-bab6-f53ff5ff4bbf"
      );
      const data = await res.json();
      setData(Object.keys(data).map((key) => data[key]));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="tableView" style={{overflowX: 'auto'}}>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Parent/Guardian's Name</th>
            <th>Phone</th>
            <th>Session</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, i) => (
            <tr key={i}>
              <td data-label="No">{i + 1}</td>
              <td data-label="Name">{item.name}</td>
              <td data-label="Parent">{item.parent}</td>
              <td data-label="Age"> {item.phone}</td>
              <td data-label="Session">{item.session}</td>
              <td data-label="Job">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SheetData;
