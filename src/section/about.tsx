import image from "../assets/profile.svg";

export const About = () => {
  return (
    <>
      <section id="about" className="about  mt-20 h-vh-90">
        <div className="title">
          <h1 className="text-4xl font-bold text-center ">About Me</h1>
        </div>
        <div className="body  grid gap-8 m-10 md:grid-cols-2 md:gap-16 lg:gap-32 
                        md:items-center md:text-left pt-10 md:pt-24  mb-10">
            <div className="profile  hidden md:inline">
                <img src={image} alt="" className="w-1/2 mx-auto" />
            </div>
           
            <div className="info">
              <div className="name">
                  LEVI JOHN LEDESMA
              </div>
                <div className="content">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </div>
                <div className="languages">
                  
                </div>
            </div>
        </div>
        </section>  
    </>
  )
}

export default About