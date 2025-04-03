import image from "../assets/profile.svg";
import { AiOutlineDown } from "react-icons/ai";

const Landing = () => {
  return (
    <section className=" md:mb-6 md:mt-24 mt-20 h-vh-90 ">
         <div className="grid gap-8 m-8 md:grid-cols-2 md:gap-16 lg:gap-32 
                        md:items-center md:text-left pt-10 md:pt-24  mb-10
                        ">
       <div className="left-sec gap-8 md:pl-24  ">
        <div className="text  animate-slidein1 opacity-0 text-center md:text-left ">
            <p className="text-2xl">Hello there! I am,</p>
                <h1 className="text-4xl font-medium mb-2">
                  Levi John Ledesma
                </h1>
              <p> 
                lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
          </div>
            <div className="buttons animate-slidein2 opacity-0 mt-4 items-center flex justify-center md:justify-start ">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mr-4">Contact</button>
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Download CV</button>
          </div>
        </div>                   
     
      <div className="immg-container md:mr-14 animate-slidein3 opacity-0 ">
       <img src={image} alt="image" className="w-8/12 mx-auto rounded-full" />
      </div>

  
    </div>
    <div className="arrow-down text-center  justify-items-center animate-slidein3 opacity-0 ">
      <p className="ardown justify-items-center"> find out more about me below<br/>
        <AiOutlineDown className="arrow-down animate-bounce mt-2 w-6 h-6"/></p>
    </div>
    </section>
   
   
  )
}

export default Landing