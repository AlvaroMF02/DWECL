import React, { Component } from 'react';
import User from './User';
class UserList extends Component {
    render() {
        return (
            <ul>
                {this.props.users.map(u => {
                    return (
                        <User
                            key={u.id}
                            name={u.name}
                            email={u.email}
                        />
                    );
                })
                }
            </ul>
        );
    }
}

// function UserList(users) {
//     return (
//         <ul>
//             {users.map(u => {
//                 return (
//                     <User
//                         key={u.id}
//                         name={u.name}
//                         email={u.email}
//                     />
//                 );
//             })
//             }
//         </ul>
//     );
// }


export default UserList;