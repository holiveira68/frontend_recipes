import fotohome from "../assets/img/fotohome.png";
import cooking from "../assets/images/image-home-real-life-small.webp";
import lupa from "../assets/icons/icon-search.svg";
import raio from "../assets/icons/icon-minimum-fuss.svg";
import whole from "../assets/icons/icon-whole-food-recipes.svg";
import pattern1 from "../assets/images/pattern-squiggle-1.svg";
import fork from "../assets/images/pattern-fork.svg";
import knife from "../assets/images/pattern-knife.svg";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-family text-green-900">
      <hr className="border-gray-200"/>
      {/* Container Principal */}
      <main className="max-w-6xl mx-auto px-6 pt-16 pb-24 text-center">
        <h1 className="text-5xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="relative p-2 z-100">
            <span className="absolute bottom-1 left-0 w-full h-10 bg-orange-400 rounded opacity-45 -z-1"></span>
            Healthy
            
          </span>
          {""}
          meals, zero fuss
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto mb-8">
          Discover eight quick, whole-food recipes that you can cook tonight —no
          processed junk, no guesswork.
        </p>
        <button className="bg-green-900 text-white px-8 py-3 rounded-full font-bold mb-16">
          Start exploring
        </button>

        {/* Imagem Inicial como colocar o button atras do texto? */}
        <div
          className="rounded-3xl overflow-hidden shadow-xl mb-32 
                       border-white border-8">

         <img
             src={pattern1} 
             alt="Onda" 
             className="absolute w-full scale-199  opacity-25 object-cover bg-[url(../assets/img/pattern-squiggle-1.svg)]" 
           /> 

          <img
            src={fotohome}
            alt="Woman cooking"
            className="w-full h-120 object-cover bg-[url(../assets/img/pattern-squiggle-1.svg)]"
          />
        </div>

        {/* Section dos 3 textos de What you´ll get*/}
        <section className="mb-32">
          <h2 className="text-3xl font-bold mb-16">What You'll get</h2>
          <div className="grid md:grid-cols-3 gap-12 text-left">
            <div>
              <div className="bg-orange-50 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                <img src={whole} alt="Cenoura" />
              </div>
              <h3 className="font-bold text-xl mb-2">Whole-food recipes</h3>
              <p className="text-gray-600">
                Each dish uses everyday, unprocessed ingredients.
              </p>
            </div>
            <div>
              <div className="bg-blue-50 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                <img src={raio} alt="Raio" />
              </div>
              <h3 className="font-bold text-xl mb-2">Minimum fuss</h3>
              <p className="text-gray-600">
                All recipes are designed to make eating healthy quick and easy.
              </p>
            </div>
            <div>
              <div className="bg-purple-50 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                <img src={lupa} alt="Lupa" />
              </div>
              <h3 className="font-bold text-xl mb-2">Search in seconds</h3>
              <p className="text-gray-600">
                Filter by name or ingredient and jump straight to the recipe you
                need.
              </p>
            </div>
          </div>
        </section>

        {/* Sessão Built for real  */}
        <section className="flex flex-col md:flex-row items-center gap-16 mb-32 text-left">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6">Built for real life</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Cooking shouldn't be complicated. These recipes come in under
              <span className="bg-orange-100 px-1 mx-1 rounded">
                30 minutes
              </span>
              of active time, fit busy schedules, and taste good enough to
              repeat.
            </p>
            <p className="text-gray-600">
              Whether you're new to the kitchen or just need fresh ideas, we've
              got you covered.
            </p>
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden shadow-xl border-white border-8">
            <img
              src={cooking}
              alt="Cortando legumes"
              className="w-full h-80 object-cover"
            />
          </div>
        </section>

        {/* Parte final do Ready to cook */}
        <section className="grid grid-cols-3 bg-gray-200 rounded-3xl p-2  
        border-white border-3">
          {/* Elementos decorativos (garfo/faca)  */}
          <div className="">
            <img src={fork} className="h-54 p-0 ml-0"></img>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Ready to cook smarter?</h2>
            <p className="text-gray-600 mb-8">
              Hit the button, pick a recipe, and get dinner on the table—fast.
            </p>
            <button className="bg-green-900 text-white px-3 py-2 rounded-full font-bold">
              Browse recipes
            </button>
          </div>

          <div className="">
            <img src={knife} className="h-54 p-0 ml-35"></img>
          </div>
          
        </section>
      </main>
      <hr className="border-gray-200"/>
    </div>
  );
}

export default Home;
