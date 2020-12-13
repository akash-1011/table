import React from 'react'
import './Table.css'

function Table({content}) {
    console.log(content)
    return (
            <div>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>COMPANY</th>
                        <th>JOB</th>
                        <th>CITY</th>
                        <th>PHONE</th>
                        <th>FAV MOVIE</th>
                    </tr>
                    {content.map(data => (
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.company}</td>
                            <td>{data.job}</td>
                            <td>{data.city}</td>
                            <td>{data.phone}</td>
                            <td>{data["Fav Movie"]}</td>
                        </tr>
                    ))}
                </table>
            </div>
    )
}

export default Table

{/* <ul key={data.id}>
                        <li>{data.id}</li>
                        <li>{data.name}</li>
                    </ul> */}
