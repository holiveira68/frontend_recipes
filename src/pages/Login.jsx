import { useState } from "react"
import { useNavigate } from "react-router";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const loginAction = async () => {
        setUsernameError("");
        setPasswordError("");

        if (!email) {
            setUsernameError("Email inválido!");
            return; // Impede que o código continue se o email for inválido
        }
        if (!password || password.length < 8) {
            setPasswordError("Senha inválida!");
            return; // Impede que o código continue se a senha for inválida
        }

        const payload = {
            email: email,
            password: password
        }
        const endpoint = '/api/v1/users/login' // Alterei de 'vi' para 'v1', verifique se é isso mesmo
        
        try {
            // Nota: Se apiFetch for uma função que faz a requisição, você provavelmente precisa de 'await' aqui.
            // Exemplo caso fosse usar o fetch nativo:
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                console.log(email);
                navigate("/recipes"); // Só navega se a requisição de login tiver sucesso
            } else {
                setPasswordError("Email ou senha incorretos!");
            }
        } catch (error) {
            console.error(error);
            setPasswordError("Erro ao tentar fazer login.");
        }
    }
    return (
        <>
            <form method="POST">
                <div className="flex items-center justify-center flex-col gap-3 mt-20 mb-20">

                    <div >
                        <label className="ml-4 mt-4 p-4" htmlFor="email">Email: </label>
                        <input className="bg-gray-100 rounded border-green-900 border-2 w-96 ml-2" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} onFocus={() => setUsernameError("")} />
                    </div>
                    <div>
                        <label className="ml-4 mt-4 p-4" htmlFor="password">Password: </label>
                        <input className="bg-gray-100 rounded border-green-900 border-2 w-96 ml-1" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} onFocus={() => setPasswordError("")} />
                    </div>
                    <button className="gap-3 mt-5 bg-lime-800 text-white font-bold rounded px-4 py-1" type="button" onClick={() => loginAction()} >Login</button>
                </div>
            </form>
        </>
    );
}