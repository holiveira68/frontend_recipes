import Coracao from "../assets/img/coracao.png"
import avocado from "../assets/img/avocado.png"
import instagram from "../assets/img/icon-instagram.svg"
import twitter from "../assets/img/icon-bluesky.svg"
import tiktok from "../assets/img/icon-tiktok.svg"

function Footer() {
    return (
        <footer className="bg-gray-50 text-gray-400 py-6 text-center text-sm">
           <div className="flex items-center justify-between px-4">
           <div className="">
            &copy; Made with 
                   <img src={Coracao} alt="Coração" className="inline size-8 fill-amber-200 stroke-yellow-600 stroke-2" />         
                   and 
                     <img src={avocado} alt="Abacate" className="inline size-8 fill-green-500 stroke-green-700 stroke-2" /> 
           </div>        
           <div className="space-x-2 inline ">
              <img src={instagram} alt="Instagram" className="inline size-6 fill-gray-400 hover:fill-pink-500" />
                <img src={twitter} alt="Twitter" className="inline size-6 fill-gray-400 hover:fill-blue-500" /> 
                <img src={tiktok} alt="TikTok" className="inline size-6 fill-gray-400 hover:fill-black" />
           </div>
           </div>
        </footer>
    )
}

export default Footer