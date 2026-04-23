function Nav(){
    return(
        <div className="h-15 p-6 items-center flex justify-between">
            <div className="text-center text-lg text-orange-400 font-bold ml-4">CONSIFY</div>
            <div className="flex gap-4 md:gap-15 mr-6">
                <a href="/" className="hover:text-orange-400">Home</a>
                <a href="/History" className="hover:text-orange-400">History</a>
                <a href="/Contact" className="hover:text-orange-400">Contact Us</a>
                <a href="/Profile" className="hover:text-orange-400">Profile</a>
            </div>
        </div>
    )
}
export default Nav