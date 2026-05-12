import { useState } from "react"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <>
            <form>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Login</button>
            </form>
        </>
    )
}