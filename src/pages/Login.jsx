import { useState } from "react"

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <form method="POST">
                <div className="flex flex-col gap-1">
                    <label htmlFor="email">Email</label>
                    <input className="rounded" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="password">Password</label>
                    <input className="rounded" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="bg-lime-800 text-white font-bold rounded px-4 py-1" type="submit">Login</button>
            </form>
        </>
    );
}