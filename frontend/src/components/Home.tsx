import Nav from "./Nav";
import { useState, useEffect } from "react";

function Home(){
    const [tasks,setTasks] = useState(["First","second","THird","fourth"]);
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
            <div className="p-4 my-10">
                <div className="text-5xl font-bold mt-10 ml-20">Welcome Dear!</div>
                <div className="mx-10">
                <button className="rounded bg-green-400 hover:bg-green-500 flex justify-self-end mr-60 mt-5 p-1 px-4">+ Add task</button>
                </div>
            </div>
            <div className="bg-mauve-100 shadow-2xl mt-20 h-fit m-5 border rounded-xl p-2">
                <div className="text-center font-bold text-2xl m-5">Your Tasks</div>
                {tasks.map((value,index)=>{
                    return(<div className="flex p-4 rounded-2xl shadow-xl hover:shadow-2xl" key={index}>
                        <div>{value}</div>
                    </div>);
                })}
            </div>
        </main>
        <footer className="h-40 bg-mauve-200 text-center place-content-center mt-50">
            <div className="">
                ALL COPYRIGHT &copy; RESERVED | MADE WITH ❤️ IN INDIA
            </div>
        </footer>
        </>
    )
}
export default Home