import { useState } from "react"

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <form method="POST">
                <div className="flex items-center justify-center flex-col gap-1">

                    <div >
                        <label htmlFor="email">Email</label>
                        <input className="bg-gray-100 rounded border-emerald-200" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input className="bg-gray-100 rounded border-emerald-200" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className="flex items-center justify-center flex-col gap-1 bg-lime-800 text-white font-bold rounded px-4 py-1" type="submit" >Login</button>
                </div>
            </form>
        </>
    );
}