import 'tailwindcss/tailwind.css';

const Navbar = () => {
    return (
        <div className="navbar w-full h-20 flex justify-between items-center px-6 bg-gray-800 text-white ">
                <div className="title text-3xl font-bold ml-8">
                        <h1>Lev.</h1>
                </div>
                <div className="nav flex space-x-10 mr-8">
                        <div className="nav-item cursor-pointer hover:text-gray-400">About</div>
                        <div className="nav-item cursor-pointer hover:text-gray-400">Projects</div>
                        <div className="nav-item cursor-pointer hover:text-gray-400">Contact</div>
                </div>
        </div>
    )
}

export default Navbar