function User({name, lastname, age}) {
    return (
        <li>
            {name} - {lastname}
            Через 10 лет Вам будет {age + 10}

        </li>
    )
}


export default User;
