import React from 'react'
import Users from './Users'

const UserCard = ({user}) => {
    const mystyle = {
        maxWidth: '18rem' ,
        border: "2px solid yellow",
       borderRadius: "5px",
        
    }
    return (
        
            <div class="card border-warning mb-3"  className="col-md-4 my-3" style={mystyle}>
             <div class="card-header">{user.name}</div>
              <div class="card-body text-warning">
               <h5 class="card-title">{user.email}</h5>
                 <p class="card-text">{user.adress} </p>
             </div>
             </div>
        
             )
}

export default UserCard
