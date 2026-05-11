import { useState } from 'react'
import foto1 from '../assets/img/image-about-our-mission-small.webp';
import bullet from '../assets/img/icon-bullet-point.svg';
import pattern2 from '../assets/img/image-about-beyond-the-plate-small.webp';
import fork from "../assets/img/pattern-fork.svg";
import knife from "../assets/img/pattern-knife.svg";

function About() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 font-sans text-green-900">
        <hr className="border-gray-200" />
        {/* Mulher Cozinhando */}
        <section className='grid md:grid-cols-2 gap-2 max-w-6xl mx-auto pt-16 pb-24'>
          <div className='flex flex-col items-start justify-between text-left'>
            <button className='bg-orange-400 rounded p-2 items-left font-bold'>Our Mission</button>
            <h1 className='font-bold font-family text-5xl text-left'>
              Help more people <br />
              cook nourishing <br />
              meals, more often.
            </h1>
            <span className='text-left text-green-900 font-family text-lg'>
              Healthy Recipe Finder was create to prove that healthy <br />
              eating can be convenient, affordable, and genuinely <br />
              delicious. <br /><br />
              We showcase quick, whole-food dishes that anyone can <br />
              master - no fancy equipment, no ultra-processed shortcuts <br />
              - just honest ingredients and straightforward steps.

            </span>
          </div>
          <div>
            <img src={foto1} alt="Mulher cozinhando" className='w-full h-130 object-cover rounded-3xl' />

          </div>
        </section>

        <hr className='border-gray-200 ' />
        {/* Why we exists Session  */}
        <section className='grid md:grid-cols-3 gap-2 max-w-7xl mx-auto px-5 pt-14 pb-20'>
          <div className=''>
            <h2 className='font-bold col-span-1 text-5xl mb-6'>Why we exist</h2>
          </div>
          <div className='flex-col col-span-2 items-start justify-between text-left'>
            <div>
              <img src={bullet} alt="Bullet Point" className='inline-block w-6 h-6 mr-4' />
              <h3 className='font-bold text-xl m-0 mb-2 inline-block'>Cut through the noise</h3>
              <br />
              <div className='ml-10'>
                <span className='text-green-900 text-lg text-left font-family'>
                  The internet is bursting with recipes, yet most busy cooks still default to take-
                  <br />
                  away or packaged foods. We curate a tight collection of fool-proof dishes so you
                  <br /> can skip the scrolling and start cooking.
                  <br /><br />

                </span>
              </div>


            </div>
            <div>
              <img src={bullet} alt="Bullet Point" className='inline-block w-6 h-6 mr-4' />
              <h3 className='font-bold text-xl m-0 mb-2 inline-block'>Empower home kitchens.</h3>
              <br />
              <div className='ml-10'>
                <span className='text-green-900 text-lg text-left font-family'>
                  When you control what goes into your meals, you control how you feel. Every
                  <br />
                  recipe is built around unrefined ingredients and ready in about half an hour of
                  <br /> active prep.
                  <br /><br />

                </span>
              </div>

              <div>
                <img src={bullet} alt="Bullet Point" className='inline-block w-6 h-6 mr-4' />
                <h3 className='font-bold text-xl m-0 mb-2 inline-block'>Make healthy look good.</h3>
                <br />
                <div className='ml-10'>
                  <span className='text-green-900 text-lg text-left font-family'>
                    High-resoluion imagery shows you exactly what success looks like - because
                    <br />
                    we eat with our eyes first, and confidence matters.
                    <br /><br />

                  </span>
                </div>



              </div>

            </div>
          </div>
        </section>
        <hr className='border-gray-200 ' />
        {/* Our food philosophy Session  */}

        <section className='grid md:grid-cols-3 gap-2 max-w-7xl mx-auto px-5 pt-14 pb-20'>
          <div className=''>
            <h2 className='font-bold col-span-1 text-5xl mb-6'>Our food philosophy</h2>
          </div>
          <div className='flex-col col-span-2 items-start justify-between text-left'>
            <div>
              <img src={bullet} alt="Bullet Point" className='inline-block w-6 h-6 mr-4' />
              <h3 className='font-bold text-xl m-0 mb-2 inline-block'>Whole ingredients first</h3>
              <br />
              <div className='ml-10'>
                <span className='text-green-900 text-lg text-left font-family'>
                  Fresh produce, grains, legumes, herbs, and quality fats form the backbone of <br />
                  every recipe.
                  <br /><br />

                </span>
              </div>


            </div>
            <div>
              <img src={bullet} alt="Bullet Point" className='inline-block w-6 h-6 mr-4' />
              <h3 className='font-bold text-xl m-0 mb-2 inline-block'>Flavor without compromise.</h3>
              <br />
              <div className='ml-10'>
                <span className='text-green-900 text-lg text-left font-family'>
                  Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.
                  <br /><br />

                </span>
              </div>

              <div>
                <img src={bullet} alt="Bullet Point" className='inline-block w-6 h-6 mr-4' />
                <h3 className='font-bold text-xl m-0 mb-2 inline-block'>Respect for time.</h3>
                <br />
                <div className='ml-10'>
                  <span className='text-green-900 text-lg text-left font-family'>
                    Weeknight meals should slot into real schedules; weekend cooking can be
                    <br />
                    leisurely but never wasteful.
                    <br /><br />

                  </span>
                </div>
              </div>
              <div>
                <img src={bullet} alt="Bullet Point" className='inline-block w-6 h-6 mr-4' />
                <h3 className='font-bold text-xl m-0 mb-2 inline-block'>Sustainable choices.</h3>
                <br />
                <div className='ml-10'>
                  <span className='text-green-900 text-lg text-left font-family'>
                    Short ingredient lists cut down on food wastte and carbon footprint, while plant-
                    <br />
                    forward dishes keep things planet-friendly.
                    <br /><br />

                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className='border-gray-200 ' />
<main className="max-w-6xl mx-auto px-6 pt-16 pb-24 text-center">
        {/* Sessão Beyond the plate  */}
                <section className="grid md:grid-cols-3 md:flex-row items-center gap-16 mt-10 mb-32 text-left">
                  <div className="flex-1 items-start justify-between text-left p-10">
                    <h2 className="text-4xl font-bold mb-10">Beyond the plate</h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Cooking shouldn't be complicated. These recipes come in under
                      of active time, fit busy schedules, and taste good enough to
                      repeat.
                    </p>
                    <p className="text-gray-600">
                      Whether you're new to the kitchen or just need fresh ideas, we've
                      got you covered.
                    </p>
                  </div>
                  <div className="col-span-2 rounded-2xl overflow-hidden shadow-xl border-white border-8">
                    <img
                      src={pattern2}
                      alt="Cortando legumes"
                      className="w-full h-100 object-cover"
                    />
                  </div>
                </section>
               
                {/* Parte final do Ready to cook */}
                        <section className="grid grid-cols-3 bg-gray-200 rounded-3xl p-2  
                        border-white border-3 m-10">
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

      </div>
    </>
  )
}

export default About