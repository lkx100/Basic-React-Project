import { useState } from 'react'

const Form = () => {

    const [user, setUser] = useState("Default")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [optional, setOptional] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()   // Prevents page reload behaviour on form submition
        console.log(`Username: ${username}`);
        console.log(`Password: ${password}`);
        setUser(username)
        setUsername("");   // set value to null in form input
        setPassword("");
        setOptional("");
    }

    return (
        <>
            <br />
            <h1 className='text-5xl'>Hi {user}!</h1>

            <form onSubmit={(e) => {
                    submitHandler(e)
                }}>
                <input
                    value={username}    // Set username by default --> ""
                    onChange={(e) => {
                        setUsername(e.target.value)   // set username for evrery change in input by user
                    }}
                    className="p-2 m-3 text-black" type="text" name="username" placeholder="Enter Username" required
                />
                <input
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    className="p-2 m-3 text-black" type="password" name="password" placeholder="Enter Password" required
                />
                <input
                    value={optional}
                    onChange={(e) => {
                        console.log(e.target.value);
                        setOptional(e.target.value);
                    }}
                    className="p-2 m-3 text-black" type="text" name="any" placeholder="Optional..."
                />
                <button className="p-2 m-4 bg-blue-300 text-xl font-bold" type="submit"> Submit </button>
            </form> <br /><hr /><br />

        </>
    )
}

export default Form
