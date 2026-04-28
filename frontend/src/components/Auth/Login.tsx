import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Login(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    const handelLogin = async (e: React.FormEvent)=>{
        e.preventDefault();
        const userData = {
            email : email,
            password : password
        }
        try{
            const res = await fetch("http://localhost:8080/api/user/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(userData)
            });
            alert("Login running!");
            if(!res.ok){
            alert("login fetch error!!");
            }else{
                alert("login successfull!!");
                navigate('/home');
            }
        }catch(e){
            alert("Error Occered in login!");
        }
    }
    return(
        <>
        <div className="h-15 p-6">
            <p className="font-bold text-xl">Login</p>
        </div>
        <div className="mt-15 h-fit place-content-center">
            <div className="w-3/4 h-fit md:h-150 rounded-2xl border-orange-200 border-20 place-content-center place-self-center text-center ">
                <form onSubmit={handelLogin} action="/">
                <div className="block pt-20 mb-5">
                <label htmlFor="email">Email:  </label>
                <input type="email" className="p-1 rounded border border-orange-300" placeholder="example@gmail.com" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="block mb-5">
                <label htmlFor="password">Password:  </label>
                <input type="password" className="p-1 rounded border border-orange-300" placeholder="Minimun 4 character" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button className="bg-blue-400 hover:bg-blue-500 rounded-xl mt-5 p-2 px-6" type='submit'>Login</button>
                </form>
                <div className="mt-6 pb-20 font-extralight"><p>New User? <span className="font-extralight text-blue-600 hover:font-semibold">Signup</span></p></div>
            </div>
        </div>
        </>
    )
}
export default Login