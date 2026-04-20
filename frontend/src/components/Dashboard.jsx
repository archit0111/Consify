 function Dashboard(){
    return(
        <>
        <div className="h-15 p-6 items-center flex justify-between">
            <div className="text-center text-lg text-orange-400 font-bold ml-4">CONSIFY</div>
            <div className="flex gap-4 md:gap-15 mr-6">
                <a href="/" className="hover:text-orange-400">Home</a>
                <a href="/History" className="hover:text-orange-400">History</a>
                <a href="/Contact" className="hover:text-orange-400">Contact Us</a>
                <a href="/Profile" className="hover:text-orange-400">Profile</a>
            </div>
        </div>
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