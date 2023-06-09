import { useState } from "react";

function Header({title}) {
    return <h1>{ title }</h1>
}

export default function HomePage() {
    const names = ['pavan kumar', 'ram', 'surya', 'sai', 'dinesh'];
    const [likes, setLikes] = useState(0);
    function handleClick(){
        setLikes(likes+1);
    }
    return (
        <div>
            <Header title = "Cartrade Gang" />
            <ul>
                {names.map((name) => (
                    <li key = {name}>{ name }</li>
                ))}
            </ul>
            <button onClick={handleClick}>Like {likes}</button>
        </div>
    )}