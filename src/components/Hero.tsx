import { FaDiscord } from 'react-icons/fa';
import { Github, Linkedin, Twitter} from "lucide-react";

const Hero = () => {
  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center"> {/* Modified this line */}
            {/* Center aligned content */}
            <div className="w-full text-center"> {/* Modified width and alignment */}
              <div className="text-center">
                <div className="w-40 h-40 mx-auto mb-2 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600"> {/* Changed mb-4 to mb-2 */}
                  <img 
                    src="/main.jpg" 
                    alt="Harsh Pratap Singh" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-[25px] font-semibold text-white mb-0"> {/* Changed mb-2 to mb-1 */}
                  Harsh Pratap Singh
                </h4>
              </div>
            </div>
          </div>
          
          {/* Social links section */}
          <div className="mt-4 text-center">
            <p className="text-gray-400 text-[16px] max-w-3xl mx-auto">
          I am an undergraduate student at 
          <a href="https://www.iitk.ac.in/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400"> IIT Kanpur</a>, studying Civil 
          Engineering.<br></br> I am also Core Team Member at <a href="https://iitk.ac.in/counsel/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400"
    >Institute Counselling Service, IITK<img src="/ICS Logo.png" alt="ICS Logo" className="inline-block h-4 w-4 ml-1 -mt-1"/>
  </a>
  <br></br>

          <br></br>I am interested in almost all fields related to programming, and have
        developed keen interest in the applications of Machine Learning in Computer Vision👁️ and 
        NLP 🧠 related tasks, and essentially solving problems which deal with both of them.
        I also like solving CTFs 🚩. I am also learning about Web3, and Solana<img src="/Solana.png" alt="Solana Logo" className="inline-block h-4 w-4 ml-1 -mt-1"/>.<br></br>

          <br></br>       
          My hobbies include playing and watching badminton 🏸 and basketball 🏀<br></br>(big fan of LCW🙇, Lin Dan🙇, D Rose🌹, and 🐐MJ), 
          swimming 🏊, and playing harmonica. I also love watching TV shows
          and movies 🎬, and my favourites among them being Game of thrones(🐺🐉🦁🦌), and.........................................
          ahhh..... leave it,<br></br> <i>We don't talk about it</i><a href="https://www.imdb.com/title/tt0137523/" target="_blank" rel="noopener noreferrer">(🧼)</a>
. 
               
          </p>
            
          <div className="mt-8 flex flex-col items-center"> {/* Added items-center */}
            <div className="flex gap-6" justify-center w-full>
              <a 
                href="https://github.com/harshpsi9194" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                  <Github size={20} className="text-white" />
                </div>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/harsh-pratap-singh-86961a282/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-12 h-12 bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors duration-300">
                  <Linkedin size={20} className="text-white" />
                </div>
              </a>

              <a 
                href="https://x.com/HaRsh_PS9194" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-12 h-12 bg-blue-400 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                  <Twitter size={20} className="text-white" />
                </div>
              </a>

              <a 
                href="https://x.com/HaRsh_PS9194" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-12 h-12 bg-[rgb(88,101,242)] hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                  <FaDiscord size={20} className="text-white" />
                </div>
              </a>
            </div>
          </div>
          </div>
        </div>
      </section>
     
      {/* Divider line with spacing */}
      <div className="max-w-4xl mx-auto px-2 mb-7">
        <hr className="border-t border-gray-700/50" />
      </div>
    </>
  );
};

export default Hero;
