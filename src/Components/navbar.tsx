import 'tailwindcss/tailwind.css';


const Navbar = () => {
    return (
        <div className="navbar grid grid-cols-2 fixed z-10  top-0 w-full h-20 justify-between pt-6 px-6  bg-gray-100 text-blue-500  drop-shadow-2xl">
                <div className="title text-3xl font-bold ml-2 md:ml-8 motion-preset-bounce motion-duration-200">
                        <a href="">Lev.</a>
                </div>


                <div className="nav grid grid-cols-3 space-x-4 md:text-xl  mr-4 text-right text-m md:mt-1 mt-2 md:mr-40 scroll-smooth">             
                        <a className="nav-item cursor-pointer hover:text-blue-800 motion-preset-bounce motion-duration-300 " href="#projects">Projects</a>
                        <a className="nav-item cursor-pointer hover:text-blue-800 motion-preset-bounce motion-duration-500" href="#about ">About</a>
                        <a className="nav-item cursor-pointer hover:text-blue-800 motion-preset-bounce motion-duration-700" href="#contact ">Contact</a>
                </div>
        </div>
    )
}

export default Navbar