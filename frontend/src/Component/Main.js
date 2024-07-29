import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Main() {
  const [values, setValues] = useState([]);

  const handleAxios = () => {
    axios
      .get("http://localhost:6000/api/get")
      .then(res => {
        console.log(res.data.data);
        setValues(res.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    handleAxios();
  }, []);

  return (
    <div className="d-flex w-100  justify-content-center align-item-center bg-light min-vh-100">
      <div className="w-100 border bg-white shadow px-3  pt-3 pb-3 rounded">
        <h3 className="text-center text-capitalize">UserList</h3>
        <Link to={"/Create"} className="btn btn-success float-end mb-4">Add +</Link>
        <table className="table table-striped table-bordered">
        <thead className="text-center thead-dark">
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">E-mail</th>
             <th scope="col">Phone-Number</th>
             <th scope="col">password</th>
             
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="justify-content-center text-center">
          {values.map((data, id) =>
            <tr key={id}>
              <td>
                {id + 1}
              </td>
              <td>
                {data.fname}
              </td>
              <td>
                {data.lname}
              </td>
              <td>
                {data.email}
              </td>
              <td>
                {data.phone}
              </td>
              <td>
                {data.passwd}
              </td>
              <td>
                <Link to={`/Edit/${data._id}`} className="btn btn-primary mx-3">
                  Edit
                </Link>
                <Link to={`/Read/${data._id}`} className="btn btn-info">
                  Read
                </Link>
                <Link to={`/Delete`} className="btn btn-danger mx-2">
                  Delete
                </Link>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Main;
