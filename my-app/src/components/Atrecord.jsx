import React from 'react'

const Atrecord = ({List}) => {
  return (
    <div className='atrecord'>
        <h1>ATTENDANCE RECORD</h1>
        <table border="1">
          <thead>
            <tr>
              <th>S.NO</th>
              <th>REG.NO</th>
              <th>NAME</th>
              <th>PRESENT</th>
              <th>ABSENT</th>
            </tr>
          </thead>
          <tbody>
            {List.map((lists)=>(<tr key={lists.sno}>
              <td>{lists.sno}</td>
              <td>{lists.regno}</td>
              <td>{lists.name}</td>
              <td>{lists.status === "PRESENT" ? "✅" : "-"}</td>
              <td>{lists.status === "ABSENT" ? "❌" : "-"}</td>
  
            </tr>))}
          </tbody>
        </table>
    </div>
  )
}

export default Atrecord