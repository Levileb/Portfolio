import 'tailwindcss/tailwind.css';


const Navbar = () => {
    return (
        <div className="navbar flex-no-wrap fixed z-10  top-0 w-full h-32 flex justify-between pt-6 px-6  bg-transparent
                bg-gradient-to-b from-white text-blue-500  drop-shadow-2xl">
                <div className="title text-3xl font-bold ml-8 motion-preset-bounce motion-duration-200">
                        <a href="">Lev.</a>
                </div>
                <div className="nav flex space-x-10  md:text-xl  text-m mr-8 md:mt-1 mt-2 md:mr-40 scroll-smooth">             
                        <a className="nav-item cursor-pointer hover:text-blue-800 motion-preset-bounce motion-duration-300 " href="#projects">Projects</a>
                        <a className="nav-item cursor-pointer hover:text-blue-800 motion-preset-bounce motion-duration-500" href="#about ">About</a>
                        <a className="nav-item cursor-pointer hover:text-blue-800 motion-preset-bounce motion-duration-700" href="#contact ">Contact</a>
                </div>
        </div>
    )
}

export default Navbar