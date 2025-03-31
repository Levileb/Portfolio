import image from "../assets/trial.jpg";


const Landing = () => {
  return (
    <section className="grid gap-8 m-8">
      <div className="text justify-items-center">
          <p>Hello there! I am,</p>
            <h1 className="text-4xl font-medium mb-2">Levi John Ledesma</h1>
            <p> 
              lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
        </div>
      <div className="immg-container">
       <img src={image} alt="image" className="w-full" />
      </div>
    </section>
   
  )
}

export default Landing