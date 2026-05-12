import { useState } from "react"

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <form method="POST">
                <div className="flex items-center justify-center flex-col gap-3">

                    <div >
                        <label className="ml-4 mt-4 p-4" htmlFor="email">   Email : </label>
                        <input className="bg-gray-100 rounded border-green-900 border-2 w-96" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label className="ml-4" htmlFor="password">Password :</label>
                        <input className="bg-gray-100 rounded border-green-900 border-2 w-96" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className="gap-3 mt-5 bg-lime-800 text-white font-bold rounded px-4 py-1" type="submit" >Login</button>
                </div>
            </form>
        </>
    );
}