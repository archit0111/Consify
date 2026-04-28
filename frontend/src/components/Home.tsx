import Nav from "./Nav";
import { useState } from "react";

function Home(){
    const [tasks,setTasks] = useState(["First","secound","Third","Fourth"]);
    const handelTask = async ()=>{
        try{
            const res = await fetch("http://localhost:8080/api/user/task",{
            method:"GET",
            headers:{"Content-Type":"application/json"}
        });
            // body:JSON.stringify}
        if(res.ok){
        }
        }catch(e){
            alert(`Error occered in fetching tasks ${e}`);
        }
    }

    return(
        <>
        <Nav/>
        <main className="pt-10">
            <div className="text-3xl mt-10 ml-10">Welcome Dear!</div>
            <div>
                <button className="rounded bg-green-400 hover:bg-green-500 flex justify-self-end mr-20 mt-5 p-1 px-2">Let's get started</button>
            </div>
            <div className="bg-yellow-400 shadow-2xl h-fit m-5 border rounded-xl p-2">
                <div className="text-center">Your Tasks</div>
                {tasks.map((value,index)=>{
                    return(<div className="flex" key={index}>
                        <div>{value}</div>
                    </div>);
                })}
            </div>
        </main>
        </>
    )
}
export default Home