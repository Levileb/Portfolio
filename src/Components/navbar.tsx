import 'tailwindcss/tailwind.css';


const Navbar = () => {
    return (
        <div className="navbar flex-no-wrap fixed z-10  top-0 w-full h-20 flex justify-between items-center px-6 bg-gray-800 text-white animate-slidein1 opacity-0 ">
                <div className="title text-3xl font-bold ml-8">
                        <h1>Lev.</h1>
                </div>
                <div className="nav flex space-x-10  md:text-xl  text-m mr-8  md:mr-40">             
                        <a className="nav-item cursor-pointer hover:text-gray-400" href="#projects">Projects</a>
                        <a className="nav-item cursor-pointer hover:text-gray-400" href="#about ">About</a>
                        <a className="nav-item cursor-pointer hover:text-gray-400" href="#contact ">Contact</a>
                </div>
        </div>
    )
}

export default Navbar