import React from 'react'
export default function Users({currentUsers,rowClicked}){
    
    return(
        <div className="container p-3">
            <h1 className="text-primary text-center pb-3 pt-3">Fetch Users list from API</h1>
                <table className="table table-dark table-hover  text-center">
                    <thead>
                        <tr >
                            <th className="p-5">ID</th>
                            <th className="p-5">FIRST_NAME</th>
                            <th className="p-5">LAST_NAME</th>
                            <th className="p-5">EMAIL</th>
                            <th className="p-5 SIZE-5">AVATAR</th>
                        </tr>
                    </thead>
                    {currentUsers.map((item)=>
                        <tbody key={item.id} >
                            <tr onClick={() =>rowClicked(item.id,item.first_name,item.last_name,item.email,item.avatar)}> 
                                <td  className="p-5">{item.id}</td>
                                <td className="p-5"> {item.first_name}</td>
                                <td  className="p-5"> {item.last_name}</td>
                                <td className="p-5"> {item.email}</td>
                                <td className="p-3"><img className="rounded-circle" src= {item.avatar} alt="pic1" /></td>
                            </tr>
                        </tbody>
                    )}
                </table>
        </div>
    )
}