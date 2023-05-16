import React from 'react';
// import { UsersStatePropsType } from './Users-container';
// import axios from 'axios';

// import userPhoto from '../../assets/images/1.jpeg'

// const Users = (props: UsersStatePropsType) => {

//     let getUsers = () => {

//         if (props.users.length === 0) {

//             axios.get('https://social-network.samuraijs.com/api/1.0/users')
//                 .then(response =>

//                     props.setUsers(response.data.items
//                         //     [

//                         //         {id: 1, followed: true, fullname: 'Igor', status: 'boss', location: {city: 'Minsk', country: 'Belarus'}},
//                         //         {id: 2, followed: false, fullname: 'Maks', status: 'cleaner', location: {city: 'Kiev', country: 'Ukraine'}},
//                         //         {id: 3, followed: true, fullname: 'Andrey', status: 'cooker', location: {city: 'Odessa', country: 'Ukraine'}},
//                         //         {id: 4, followed: false, fullname: 'Kol9', status: 'employee', location: {city: 'Zurich', country: 'Switzerland'}}

//                         // ]
//                     ))
//         }
//     }


//     return (
//         <div>
//             <button onClick={() => getUsers()}>Get users</button>
//             {
//                 props.users.map(el => <div key={el.id}>
//                     <span>
//                         <div>
//                             <img alt='img' src={el.photos.small !== null ? el.photos.small : userPhoto} />
//                         </div>
//                         <div>
//                             {el.followed ? <button onClick={() => { props.unfollow(el.id) }}>Unfollow</button> : <button onClick={() => { props.follow(el.id) }}>Follow</button>}
//                         </div>
//                     </span>
//                     <span>
//                         <span>
//                             <div>{el.name}</div>
//                             <div>{el.status}</div>
//                         </span>
//                         <span>
//                             <div>{'el.location.country'}</div>
//                             <div>{'el.location.city'}</div>
//                         </span>
//                     </span>
//                 </div>)
//             }
//         </div>
//     );
// };

// export default Users;