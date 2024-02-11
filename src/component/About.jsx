import React from 'react'

import bidObord from '../assets/mindful.svg'

function About() {
  return (
    <div className='w-full bg-black backpattern md:pl-10 md:pr-10 flex flex-col justify-center items-center'>
        <div className='flex justify-start items-center'>
          <a href="/">
         <img src={bidObord} alt="bider"  className='w-60 h-60 mb-20'/>
         <h2 className='text-4xl text-green-700 mb-2'> Statebidder</h2>
         </a>
         </div>
      <div className='flex justify-center items-center'>
        <div className='w-[95vh] border-2 border-green-400  mt-50 p-20'>
          <div>
          <h1 className='text-green-700 text-4xl'>About StateBidder</h1>
          <p className='text-slate-400 mt-9 leading-loose tracking-wider justify-center align-middle'>
          Welcome to StateBidder, your premier partner in e-tendering solutions, proudly in collaboration with state governments.
           In particular, we are honored to announce our partnership with the Adamawa State Government Ministry of Budget and Planning.
            At StateBidder, we seamlessly blend innovation with efficiency, revolutionizing procurement processes with a commitment 
            to transparency, fairness, and excellence.
          </p>
          </div>

          <div>
          <h1 className='text-green-700 text-4xl mt-5'>Our Mission:</h1>
          <p className='text-slate-400 mt-9 leading-loose tracking-wider justify-center align-middle'>
          At StateBidder, our mission is to empower organizations and government entities through an advanced e-tendering platform.
           In exclusive collaboration with the Adamawa State Government Ministry of Budget and Planning, we aim to simplify complex procurement procedures, 
           foster healthy competition, and uphold a level playing field for all participants. Our goal is to enhance the procurement experience, making it not only efficient but also ethically sound.
          </p>
          </div>

          <div>
          <h1 className='text-green-700 text-4xl mt-5'>In Collaboration with Adamawa State Government Ministry of Budget and Planning:
</h1>
          <p className='text-slate-400 mt-9 leading-loose tracking-wider justify-center align-middle'>
          At StateBidder, our mission is to empower organizations and government entities through an advanced e-tendering platform.
           In exclusive collaboration with the Adamawa State Government Ministry of Budget and Planning, we aim to simplify complex procurement procedures, 
           foster healthy competition, and uphold a level playing field for all participants. Our goal is to enhance the procurement experience, making it not only efficient but also ethically sound.
          </p>
          </div>

          <div>
          <h1 className='text-green-700 text-4xl mt-5'>Commitment to Excellence:</h1>
          <p className='text-slate-400 mt-9 leading-loose tracking-wider justify-center align-middle'>
          Excellence is deeply embedded in StateBidder's ethos. We set high standards for ourselves and our solutions, ensuring that every aspect of our platform reflects quality, reliability, and innovation.
           Our commitment to excellence extends to supporting the objectives of the Adamawa State Government, making procurement processes streamlined, effective, and accountable.
          </p>
          </div>


          <div>
          <h1 className='text-green-700 text-4xl mt-5'>Collaboration for Success:</h1>
          <p className='text-slate-400 mt-9 leading-loose tracking-wider justify-center align-middle'>
          Success is a journey we embark on together with our clients, state governments, and the Adamawa State Government Ministry of Budget and Planning. 
          StateBidder believes in the power of collaboration, recognizing that shared efforts lead to greater achievements. 
          We work hand-in-hand with organizations and governments, ensuring that our platform becomes a catalyst for their success in procurement endeavors.

Thank you for considering StateBidder as your trusted partner in the world of e-tendering. Join us as we redefine efficiency, transparency, and excellence in collaboration with the Adamawa State Government Ministry of Budget and Planning.
          </p>
          </div>
    <a href="/">
      <p className='text-green-400 mt-20'>[ Home ]</p>
      </a>
        </div>
      </div>
       
    </div>
  )
}

export default About