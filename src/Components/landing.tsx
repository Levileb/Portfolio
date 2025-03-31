import image from "../assets/trial.jpg";


const Landing = () => {
  return (
    <section className="grid gap-8 m-8 md:grid-cols-2 md:gap-16 lg:gap-32 
                        md:items-center md:text-left pt-10 md:pt-24 ">

       <div className="left-sec gap-8 md:pl-24 ">
        <div className="text text-center md:text-left ">
            <p>Hello there! I am,</p>
                <h1 className="text-4xl font-medium mb-2">
                  Levi John Ledesma
                </h1>
              <p> 
                lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
          </div>
            <div className="buttons mt-4 items-center flex justify-center md:justify-start">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mr-4">Contact</button>
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Download CV</button>
          </div>
        </div>                   
     
      <div className="immg-container md:mr-14">
       <img src={image} alt="image" className="w-full" />
      </div>
    </section>
   
  )
}

export default Landing