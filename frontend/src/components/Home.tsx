import Nav from "./Nav"
function Home(){
    return(
        <>
        <Nav/>
        <main className="pt-10">
            <div className="text-3xl mt-10 ml-10">Welcome Dear!</div>
            <div>
                <button className="rounded bg-green-400 hover:bg-green-500 flex justify-self-end mr-20 mt-5 p-1 px-2">Let's get started</button>
            </div>
        </main>
        </>
    )
}
export default Home