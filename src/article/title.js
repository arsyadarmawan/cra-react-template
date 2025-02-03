import * as React from "react";

const Title = ({text}) => {
    let variabelLain = '-'

    return (
        <div id={'varible'}>
            <h1>{text} {variabelLain}</h1>
            <List/>

        </div>
    )
}

const customers = [
    { id: 1, name: 'Albert', gender: 'male' },
    { id: 2, name: 'Einstein', gender: 'female' },
    { id: 3, name: 'Gilbert', gender: 'male' },
    { id: 4, name: 'Alex', gender: 'male' },
    { id: 5, name: 'Silva', gender: 'female' },
];

const List = () => {
    const users = [
        'Albert', 'Romy', 'Shinta', 'Hendra', 'Fenny', 'Desta'
    ];
    // const displayUser = users.map(user => <li>{user}</li>)
    // return <ul>{displayUser}</ul>


    const displayUser = customers.map((user) => {
        return <li key={user.id}>{user.name} ({user.gender})</li>
    })
    return <ul>{displayUser}</ul>

}

export  default Title;