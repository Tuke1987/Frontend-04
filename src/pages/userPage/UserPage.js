import User from "../../components/user/User";


function UsersPage () {
    return (
        <ul>
            <User name={'Anna'} lastname='ivanova' age={42}/>
            <User name={'John'} lastname='johns' age={24}/>
            <User name={'Mike'} lastname='tayson' age={47}/>
            <User name={'Robert'} lastname='jr' age={67}/>
        </ul>
    )
}

export default UsersPage