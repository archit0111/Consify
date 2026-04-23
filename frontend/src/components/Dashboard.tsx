 import Nav from "./Nav"
 
 function Dashboard(){
    return(
        <>
        <Nav/>
        <div className="mt-15 h-fit items-center md:pl-20 lg:pl-28 lg:mt-20 lg:flex gap:25 md:gap-35 lg:gap-60">
            <div>
                <div className="pt-15 pl-5 font-extrabold text-2xl md:text-4xl">Consistency isn’t luck. It’s a system.</div>
                <div className="pl-8 max-w-100 md:max-w-130 pt-2">Track your daily tasks and stay accountable with a simple system designed for <span className="text-orange-400">real</span> life.</div>
            </div>
            <div className="text-center mt-25"><button className="bg-green-500 p-1 hover:bg-green-400 rounded px-2 place-self-center">Start now</button></div>
        </div>
        <div  className="h-96 mt-10">img portion..</div>
        <div className="bg-orange-200 h-fit">
            <div className="text-center">
                Get together on
            </div>
            <div className=" text-center">All Rights reserved &copy;  Made with ❤️ in India</div>
        </div>
        </>
    )
 }

 export default Dashboard