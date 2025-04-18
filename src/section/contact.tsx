import { MdContentCopy, MdCheckCircle } from 'react-icons/md';
import { useState } from 'react';
import viber from "../assets/viberqr.jpg";
import { 
    FaFacebookSquare, 
    FaLinkedin,
    FaViber,
    FaGithub,
 } from "react-icons/fa";


const Contact = () => {
    const [copied, setCopied] = useState(false);
      
    const email = 'levi.19johnledesma@gmail.com';
      
    const handleCopy = () => {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2s
    };
      
    return (
        <section 
            id="contact" 
            className='space-y-4 grid grid-cols-1 place-items-center h-screen pt-18 mt-64 m-14'>
            <div className="sec-cont grid  md:grid-cols-2 gap-6 content-center justify-center items-center text-center w-full">
                <div className="title text-5xl md:text-6xl lg:text-7xl font-medium 
                            intersect:motion-preset-slide-up motion-delay-100 md:text-left md:pl-38 laptop:pl-40 text-blue-500 cs:w-14">
                    Let's Connect
                </div>

                <div className="content bg-white shadow-lg rounded-lg p-6 max-w-md md:bg-transparent md:shadow-none md:p-0 md:max-w-full">
                    <div className="image mb-4">
                        <img src="" alt="" className="w-full h-auto rounded-md" />
                    </div>

                    <div className="text mb-4 intersect:motion-preset-slide-up motion-delay-400">
                        <p className="text-gray-600 text-lg md:text-lg lg:text-lg">
                            If you are interested in collaborating or have any questions, feel free to reach out!
                        </p>
                        <div 
                        className="flex items-center justify-center gap-2 text-xl md:text-2xl lg:text-3xl font-medium cursor-pointer mt-2 group"
                        onClick={handleCopy}
                        >
                        {copied ? (
                            <MdCheckCircle className="text-green-500 transition-all duration-300 scale-110" />
                        ) : (
                            <MdContentCopy className="group-hover:text-blue-500 transition-colors duration-200" />
                        )}
                        <span className="hover:text-blue-500 hover:underline transition-all duration-200">
                            {email}
                        </span>
                        </div>
                    </div>

                    <div className="logos flex flex-wrap justify-center items-center gap-10 mt-6 ">
                        <div className="gap-2 flex flex-col items-center intersect:motion-preset-slide-up motion-delay-300">
                            <a href="https://www.facebook.com/leviileb/" className="items-center justify-items-center">
                                <FaFacebookSquare className="w-12 h-12 text-blue-500" />
                                <p>Facebook</p>
                            </a>
                         
                        </div>
                        <div className=" gap-2 flex flex-col items-center intersect:motion-preset-slide-up motion-delay-500">
                            <a href="https://www.linkedin.com/in/levi-john-ledesma-252a29259/">
                                <FaLinkedin className="w-12 h-12 text-blue-500  ml-1" />
                                <p>LinkedIn</p>
                            </a>
                           
                        </div>
                        <div className=" gap-1 flex flex-col items-center intersect:motion-preset-slide-up motion-delay-700">
                            <a href={viber}>
                                <FaViber className="w-12 h-12 text-blue-500"/>
                                <p>Viber</p>
                            </a>  
                        </div>
                        <div className="gap-1 flex flex-col items-center intersect:motion-preset-slide-up motion-delay-1000">
                            <a href="https://github.com/Levileb">
                                <FaGithub className="w-12 h-12 text-blue-500 text-center"/>
                                <p>Github</p>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>

            {copied && (
                <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded shadow-lg transition-opacity duration-300">
                    <MdCheckCircle className="text-white transition-all duration-300 scale-110" />
                    <span>Copied to clipboard!</span>
                </div>
            )}
        </section>
    );
};

export default Contact;
