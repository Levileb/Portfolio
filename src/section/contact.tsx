import viber from "../assets/viber.svg";
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import facebook from '../assets/facebook.svg';

const Contact = () => {
    return (
        //card container for contacts
        <section id="contact" className='grid grid-cols-1 place-items-center h-screen pt-18'>
            <div className="sec-cont grid gap-6 content-center justify-center items-center text-center w-full">
                <div className="title text-3xl md:text-4xl lg:text-5xl font-bold">
                    Let's Connect
                </div>
                <div className="content bg-white shadow-lg rounded-lg p-6 max-w-md md:bg-transparent md:shadow-none md:p-0 md:max-w-full grid-cols-1 md:grid-cols-2">
                    <div className="image mb-4">
                        <img src="" alt="" className="w-full h-auto rounded-md" />
                    </div>
                    <div className="text">
                        <div className="project-details">
                            <p className="text-gray-600">
                                If you are interested in collaborating or have any questions, feel free to reach out!
                                <p 
                                    className="text-lg md:text-xl lg:text-2xl font-bold cursor-pointer" 
                                    onClick={() => navigator.clipboard.writeText('levi.19johnledesma@gmail.com')}
                                >
                                    levi.19johnledesma@gmail.com
                                </p>
                            </p>
                        </div>
                    </div>
                    <div className="logos flex flex-row justify-center mt-4 gap-10">
                        <div className="fb flex flex-col items-center mt-2">
                            <img src={facebook} alt="Facebook" className="w-12 h-12" />
                            <p>Facebook</p>
                        </div>
                        <div className="fb flex flex-col items-center">
                            <img src={linkedin} alt="LinkedIn" className="w-14 h-14" />
                            <p>LinkedIn</p>
                        </div>
                        <div className="fb flex flex-col items-center">
                            <img src={viber} alt="Viber" className="w-14 h-14" />
                            <p>Viber</p>
                        </div>
                        <div className="fb flex flex-col items-center mt-2">
                            <img src={github} alt="Github" className="w-12 h-12" />
                            <p>Github</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;