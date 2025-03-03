import React from "react";


const Student = ( {data} ) => {
  return (
    <div>
     
      <h2>Student List</h2>
      <table border="2">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Reg No</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.sno}>
              <td>{item.sno}</td>
              <td>{item.regno}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Student;
