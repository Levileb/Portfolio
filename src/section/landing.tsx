import image from "../assets/profile.svg";
import { useEffect, useRef, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { FaTools } from "react-icons/fa";


const Landing = () => {
  
  const items = ['Levi John Ledesma|', 'Web Developer|', 'Flutter Developer|'];

  const displayRef = useRef<HTMLHeadingElement>(null);
  let index = useRef(0); 
  useEffect(() => {
    let charIndex = 0;
    let isDeleting = false;

    function typewrite() {
      if (displayRef.current) {
        const currentText = items[index.current];
        const displayedText = isDeleting
          ? currentText.substring(0, charIndex--)
          : currentText.substring(0, charIndex++);

        displayRef.current.textContent = displayedText;

        if (!isDeleting && charIndex === currentText.length) {
          isDeleting = true;
          setTimeout(typewrite, 1000); 
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          index.current = (index.current + 1) % items.length;
          setTimeout(typewrite, 1000); 
        } else {
          setTimeout(typewrite, isDeleting ? 50 : 100); 
        }
      }
    }

    typewrite();
  }, []);

  const [showToast, setShowToast] = useState(false);

  const handleDownloadClick = () => {
    // You can handle the actual download logic here
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // Hide after 3s
  };

  return (
    <section className=" lg:mb-5 lg:mt-24 mt-20 h-vh-90 mb-6">
      <div className="grid gap-8 m-6 laptop:grid-cols-1 desktop:grid-cols-2 lg:gap-16 xl:gap-32 
                      desktop:ml-28
                      items-center lg:text-left pt-10 desktop:pt-24  mb-10">
        <div className="left-sec gap-8 dekstop:pl-24  ">
          <div className="text  text-center desktop:text-left intersect:motion-preset-slide-up motion-delay-100 ">
            <p className="text-l lg:text-xl text-gray-700">Hello there! I am,</p>
            <div className="h-12 lg:h-16 w-full
             ">
            <h1 ref={displayRef} className="desktop:text-6xl laptop:text-5xl text-4xl font-semibold  text-blue-500">
            </h1>
            </div>
            <p className="text-m lg:text-xl text-gray-700"> 
              An <strong>Information Technology</strong> that loves to design and
              develop web and mobile systems.
            </p>
          </div>
          <div className="buttons  mt-4 items-center flex justify-center desktop:justify-start ">
            <button 
              className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 mr-4 text-lg 
              intersect:motion-preset-bounce motion-delay-300"
              onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                  }}
                >
              Contact
            </button>
            <button
              className="bg-transparent text-blue-500 px-6 py-3 rounded-md
               hover:bg-blue-500 hover:text-white border-blue-500 border-2 text-lg intersect:motion-preset-bounce motion-delay-500"
              onClick={handleDownloadClick}>
              Download CV
            </button>
          </div>
        </div>                   
    
        <div className="img-container desktop:mr-14 intersect:motion-preset-slide-up motion-delay-100 flex justify-center">
          <img 
            src={image} 
            alt="image" 
            className="w-8/12 sm:w-5/12 laptop:w-4/12 desktop:w-8/12 mx-auto rounded-full" 
          />
        </div>
      </div>

      <div className="arrow-down text-center justify-items-center lg:mt-20 mt-36 intersect:motion-preset-slide-up motion-delay-100 hidden desktop:block">
        <p className="ardown justify-items-center text-gray-700"> 
          <a href="#about"> find out more about me below</a><br/>
          <AiOutlineDown className="arrow-down animate-bounce mt-2 w-6 h-6 text-blue-500"/>
        </p>
      </div>
      {showToast && (
              <div className="fixed top-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2
               bg-blue-500 text-white px-4 py-2 rounded shadow-lg transition-opacity duration-300 z-50">
                <FaTools className="text-white transition-all duration-300 scale-110" />
                <span>Working on it!</span>
              </div>
            )}
    </section>
  )
}

export default Landing;
