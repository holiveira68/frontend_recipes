import { useState } from "react"
import { useNavigate } from "react-router";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const loginAction = () => {
        setUsernameError("");
        if (!email) {
            setUsernameError("Email inválido!");
        }
        if (!password || password.length < 8) {
            setPasswordError("Senha inválida!");
        }

        console.log(email);
        navigate("/recipes");

    }
    return (
        <>
            <form method="POST">
                <div className="flex items-center justify-center flex-col gap-3 mt-20 mb-20">

                    <div className="flex flex-col w-96">
                        <label className="mb-1 font-medium" htmlFor="email">Email: </label>
                        <input className="bg-gray-100 rounded border-green-900 border-2 w-full p-2" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} onFocus={() => setUsernameError("")} />
                    </div>
                    <div className="flex flex-col w-96">
                        <label className="mb-1 font-medium" htmlFor="password">Password: </label>
                        <input className="bg-gray-100 rounded border-green-900 border-2 w-full p-2" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} onFocus={() => setPasswordError("")} />
                    </div>
                    <button className="gap-3 mt-5 bg-lime-800 text-white font-bold rounded px-4 py-1" type="button" onClick={() => loginAction()} >Login</button>
                </div>
            </form>
        </>
    );
}