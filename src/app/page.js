
import Image from 'next/image'

export default function Home() {
  return (
    
    
<>
{/* haeder */}
<div className='bg-white'>
<header class="text-gray-600 body-font hidden md:block">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <img className="object-cover object-center rounded" alt="hero" src="/logo.png" width='130px'/>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900">Home </a>
      <a class="mr-5 hover:text-gray-900">About us</a>
      <a class="mr-5 hover:text-gray-900">Founder</a>
      <a class="mr-5 hover:text-gray-900">Testiomals</a>
      <a class="mr-5 hover:text-gray-900">Blog</a>
      <a class="mr-5 hover:text-gray-900">Faqs</a>
      <a class="mr-5 hover:text-gray-900">Download app</a>
    </nav>
    <button className="inline-flex hover:text-white hover:bg-[#00538F] text-[#00538F]   border-[#00538F] border py-1 px-6 m-2 focus:outline-none   rounded-xl  text-lg">Login</button>
    <button className="inline-flex hover:text-white hover:bg-[#00538F] text-[#00538F]   border-[#00538F] border py-1 px-6 m-2 focus:outline-none   rounded-xl  text-lg">Register</button>
  </div>
</header>
<header class="text-gray-600 body-font block md:hidden">
  
<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <a  class="flex">
    {/* <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"> */}
    <img className="object-cover object-center rounded  ml[-900px]" alt="hero" src="/logo.png" width='130px'/>
   
    </a>
  
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 ">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
        <button className="inline-flex hover:text-white hover:bg-[#00538F] text-[#00538F]   border-[#00538F] border py-1 px-6 m-2 focus:outline-none   rounded-xl  text-lg">Login</button>
    <button className="inline-flex hover:text-white hover:bg-[#00538F] text-[#00538F]   border-[#00538F] border py-1 px-6 m-2 focus:outline-none   rounded-xl  text-lg">Register</button>
      </ul>
    </div>
  </div>
</nav>

  {/* <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <img className="object-cover object-center rounded" alt="hero" src="/logo.png" width='130px'/>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900">Home </a>
      <a class="mr-5 hover:text-gray-900">About us</a>
      <a class="mr-5 hover:text-gray-900">Founder</a>
      <a class="mr-5 hover:text-gray-900">Testiomals</a>
      <a class="mr-5 hover:text-gray-900">Blog</a>
      <a class="mr-5 hover:text-gray-900">Faqs</a>
      <a class="mr-5 hover:text-gray-900">Download app</a>
    </nav>
    <button className="inline-flex hover:text-white hover:bg-[#00538F] text-[#00538F]   border-[#00538F] border py-1 px-6 m-2 focus:outline-none   rounded-xl  text-lg">Login</button>
    <button className="inline-flex hover:text-white hover:bg-[#00538F] text-[#00538F]   border-[#00538F] border py-1 px-6 m-2 focus:outline-none   rounded-xl  text-lg">Register</button>
  </div> */}
</header>
{/* Main section */}
<section className="text-gray-600  body-font lg:p-[5em]">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl  mb-4  "><span className='font-sm text-[#434343]'>Hire</span>
        <br className="hidden lg:inline-block " /><span className='text-[#00538F] text-3xl font-bold'> Professional freelancers </span>
        <br className="hidden lg:inline-block"/> and <span className='text-[#DD730A] text-3xl font-bold'> verified companies</span>  to
        <br className="hidden lg:inline-block"/>get your job done
      </h1>
      
     
      <div className='flex flex-row  justify-center items-center rounded-xl     border  border-[#00538F]'>

<input type="text" id="name" name="name" placeholder="Search"className="py-1 text-white bg-none px-6 border-transparent focus:border-transparent focus:ring-0"/>
<span><button className="inline-flex text-white bg-[#00538F] border-0 py-1 px-6 m-2 focus:outline-none   rounded-xl  text-lg">Search</button></span>
</div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded hidden  md:block" alt="hero" src="/home.png"/>
    </div>
  </div>
</section>
</div>
{/* Section 4 */}
<section className="text-gray-600 body-font bg-white lg:p-[5em]">
  <div className="container px-5 py-24 mx-auto flex sm:flex-wrap">
    <div className="flex flex-wrap-reverse w-full">
      <div className="md:w-1/2 md:pr-10 md:py-6">
      <h1 className="title-font sm:text-4xl  mb-4  "><span className='text-3xl font-bold text-[#434343]'>Why</span>
       <span className='text-[#00538F] text-3xl font-bold'>  selflance </span>
       
      </h1>
      
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00538F] inline-flex items-center justify-center text-white relative z-10">
            
           
          </div>
          <div className="flex-grow pl-4">
            <h2 className=" title-font font-semibold text-[#434343] mb-1 tracking-wider">Stick to your <span className='text-[#DD730A]'>budger</span> </h2>
            <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00538F] inline-flex items-center justify-center text-white relative z-10">
            
          </div>
          <div className="flex-grow pl-4">
          
          <h2 className=" title-font font-semibold text-[#434343] mb-1 tracking-wider">Stick to your <span className='text-[#DD730A]'>budger</span> </h2>
            <p className="leading-relaxed">Vice migas literally kitsch +1 pok pok. Truffaut hot chicken slow-carb health goth, vape typewriter.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00538F] inline-flex items-center justify-center text-white relative z-10">
            
          </div>
          <div className="flex-grow pl-4">
           
          <h2 className=" title-font font-semibold text-[#434343] mb-1 tracking-wider">Stick to your <span className='text-[#DD730A]'>budger</span> </h2>
            <p className="leading-relaxed">Coloring book nar whal glossier master cleanse umami. Salvia +1 master cleanse blog taiyaki.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00538F] inline-flex items-center justify-center text-white relative z-10">
           
          </div>
          <div className="flex-grow pl-4">
         
          <h2 className=" title-font font-semibold text-[#434343] mb-1 tracking-wider">Stick to your <span className='text-[#DD730A]'>budger</span> </h2>
            <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
          </div>
        </div>
        <div className="flex relative">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00538F] inline-flex items-center justify-center text-white relative z-10">
           
          </div>
          <div className="flex-grow pl-4">
           
          <h2 className=" title-font font-semibold text-[#434343] mb-1 tracking-wider">Stick to your <span className='text-[#DD730A]'>budger</span> </h2>
            <p className="leading-relaxed">Pitchfork ugh tattooed scenester echo park gastropub whatever cold-pressed retro.</p>
          </div>
        </div>
      </div>
      {/* <Image src="/person.png" className='' height="50" width="50"></Image> */}
      {/* <img className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src="/person.png" alt="step"/> */}
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mt-[100px]">
      <img className="object-cover object-center rounded" alt="hero" src="/person.png"/>
    </div>
    </div>
  </div>
</section>
{/* section 3 */}
<div className="text-center bg-[#d4e4ef] lg:p-[5em]  relative   z-5">
<h1 className="text-4xl  font-bold lg:px-[5em] p-5">Become a <span className='text-[#00538F]'>freelancer </span>or <br></br>register as <span className='text-[#DD730A]'>Company </span></h1>
        <p className="text-gray-500 lg:px-[14em] p-5 "> Complete the form to join as a <br></br>freelancer or register as a company. Get started today!</p>


<div className="flex space-x-10 items-center mt-3 justify-center ">

    <div>
     <button className='px-7 py-3 border-[#00538F]  font-medium border rounded-2xl text-[#00538F] hover:bg-[#00538F] hover:text-white '>Freelancer</button>
        
        </div>
        
    <div>

    <button className='px-7 py-3 border-[#00538F] font-medium border rounded-2xl text-[#00538F] hover:bg-[#00538F] hover:text-white '>Regsiter company</button>
    </div>
</div>

</div>
{/* section 3.5 */}
<section className="text-gray-600 body-font lg:p-[5em]">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    <h1 className="title-font sm:text-4xl  mb-4  "><span className='text-3xl font-bold text-[#434343]'>Meet our</span>
       <span className='text-[#00538F] text-3xl font-bold'>  Founder </span></h1>
      <img className="object-cover object-center rounded" alt="hero" src="/person3.png"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
    <h1 className="title-font sm:text-xl  mb-4  "><span className='font-[30px] text-[#434343] leading-7'>Hello, it’s Me</span>
        <br className="hidden lg:inline-block " /><span className='text-[#00538F] text-3xl font-bold leading-8'> shanemadar khan</span>
        <br className="hidden lg:inline-block"/> <span className='text-[#DD730A] text-3xl font-bold leading-8'> founder of selflance</span> 
      
      </h1>
    
      <p className="mb-8 leading-relaxed">At Crafting Your Service Solutions, we pride ourselves on being a team of dedicated professionals who are deeply committed to delivering top-notch services. With years of experience and a passion for our craft, we excel in transforming routine tasks into extraordinary experiences.</p>
      <div className="flex justify-center">
      <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
          </button>
      <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
      <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
          </button>
      <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
      <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
          </button>
       
      </div>
    </div>
  </div>
</section>
{/* sectionknkl */}
<section class="text-gray-600 bg-white body-font lg:p-[5em]">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
    <h1 className="text-4xl  font-bold lg:px-[5em] p-5">What Our Clients Say<br></br> About Us </h1>
        <p className="text-gray-500 lg:px-[14em] p-5 "> Complete the form to join as a freelancer <br></br>or register as a company. Get started today!</p>

    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full hover:border-[#22A2FF] hover:border hover:bg-white transition    hover:-translate-y-1 hover:scale-110   p-8 flex-col">
          <div class="flex items-center mb-3">
          <div >


<Image src="/developer.jpg" className="rounded-full mr-2" height="60" width="60"></Image>
</div>
<div><p className=" text-gray-900 text-lg title-font font-medium text-left">Angei remi</p>
<p className="text-gray-500 text-left">Developer at lenovo</p>
<div className='flex flex-row'>
<svg xmlns="http://www.w3.org/2000/svg" width="18.67" height="17.28" viewBox="0 0 18.67 17.28" fill="#FBB040">
  <path d="M9.34 0l2.28 5.85h5.84l-4.72 3.64 2.28 5.86-4.72-3.65-4.72 3.65 2.28-5.86L0 5.85h5.84z"/>
  <path fill="none" d="M0 0h18.67v17.28H0z"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="18.67" height="17.28" viewBox="0 0 18.67 17.28" fill="#FBB040">
  <path d="M9.34 0l2.28 5.85h5.84l-4.72 3.64 2.28 5.86-4.72-3.65-4.72 3.65 2.28-5.86L0 5.85h5.84z"/>
  <path fill="none" d="M0 0h18.67v17.28H0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="18.67" height="17.28" viewBox="0 0 18.67 17.28" fill="#FBB040">
  <path d="M9.34 0l2.28 5.85h5.84l-4.72 3.64 2.28 5.86-4.72-3.65-4.72 3.65 2.28-5.86L0 5.85h5.84z"/>
  <path fill="none" d="M0 0h18.67v17.28H0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="18.67" height="17.28" viewBox="0 0 18.67 17.28" fill="#FBB040">
  <path d="M9.34 0l2.28 5.85h5.84l-4.72 3.64 2.28 5.86-4.72-3.65-4.72 3.65 2.28-5.86L0 5.85h5.84z"/>
  <path fill="none" d="M0 0h18.67v17.28H0z"/>
</svg>

</div>

</div>
            {/* <h2 class="text-gray-900 text-lg title-font font-medium">Shooting Stars</h2> <br></br>
            <div>
            <p class="leading-relaxed text-base">Certainty  intention </p></div> */}
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">Certainty say suffering his him collected intention promotion. Hill sold ham men made lose case. Views abode law heard jokes too.ention promotion. Hill sold ham men made lose case. men made lose case. Views</p>
            
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full hover:border-[#22A2FF] hover:border hover:bg-white transition    hover:-translate-y-1 hover:scale-110   p-8 flex-col">
          <div class="flex items-center mb-3">
          <div >


<Image src="/developer.jpg" className="rounded-full mr-2" height="60" width="60"></Image>
</div>
<div><p className=" text-gray-900 text-lg title-font font-medium text-left">Angei remi</p>
<p className="text-gray-500 text-left">Developer at lenovo</p>
<div className='flex flex-row'>
<svg xmlns="http://www.w3.org/2000/svg" width="18.67" height="17.28" viewBox="0 0 18.67 17.28" fill="#FBB040">
  <path d="M9.34 0l2.28 5.85h5.84l-4.72 3.64 2.28 5.86-4.72-3.65-4.72 3.65 2.28-5.86L0 5.85h5.84z"/>
  <path fill="none" d="M0 0h18.67v17.28H0z"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="18.67" height="17.28" viewBox="0 0 18.67 17.28" fill="#FBB040">
  <path d="M9.34 0l2.28 5.85h5.84l-4.72 3.64 2.28 5.86-4.72-3.65-4.72 3.65 2.28-5.86L0 5.85h5.84z"/>
  <path fill="none" d="M0 0h18.67v17.28H0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="18.67" height="17.28" viewBox="0 0 18.67 17.28" fill="#FBB040">
  <path d="M9.34 0l2.28 5.85h5.84l-4.72 3.64 2.28 5.86-4.72-3.65-4.72 3.65 2.28-5.86L0 5.85h5.84z"/>
  <path fill="none" d="M0 0h18.67v17.28H0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="18.67" height="17.28" viewBox="0 0 18.67 17.28" fill="#FBB040">
  <path d="M9.34 0l2.28 5.85h5.84l-4.72 3.64 2.28 5.86-4.72-3.65-4.72 3.65 2.28-5.86L0 5.85h5.84z"/>
  <path fill="none" d="M0 0h18.67v17.28H0z"/>
</svg>

</div>

</div>
            {/* <h2 class="text-gray-900 text-lg title-font font-medium">Shooting Stars</h2> <br></br>
            <div>
            <p class="leading-relaxed text-base">Certainty  intention </p></div> */}
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">Certainty say suffering his him collected intention promotion. Hill sold ham men made lose case. Views abode law heard jokes too.ention promotion. Hill sold ham men made lose case. men made lose case. Views</p>
            
          </div>
        </div>
      </div> <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full hover:border-[#22A2FF] hover:border hover:bg-white transition    hover:-translate-y-1 hover:scale-110   p-8 flex-col">
          <div class="flex items-center mb-3">
          <div >


<Image src="/developer.jpg" className="rounded-full mr-2" height="60" width="60"></Image>
</div>
<div><p className=" text-gray-900 text-lg title-font font-medium text-left">Angei remi</p>
<p className="text-gray-500 text-left">Developer at lenovo</p>
<div className='flex flex-row'>
<svg xmlns="http://www.w3.org/2000/svg" width="18.67" height="17.28" viewBox="0 0 18.67 17.28" fill="#FBB040">
  <path d="M9.34 0l2.28 5.85h5.84l-4.72 3.64 2.28 5.86-4.72-3.65-4.72 3.65 2.28-5.86L0 5.85h5.84z"/>
  <path fill="none" d="M0 0h18.67v17.28H0z"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="18.67" height="17.28" viewBox="0 0 18.67 17.28" fill="#FBB040">
  <path d="M9.34 0l2.28 5.85h5.84l-4.72 3.64 2.28 5.86-4.72-3.65-4.72 3.65 2.28-5.86L0 5.85h5.84z"/>
  <path fill="none" d="M0 0h18.67v17.28H0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="18.67" height="17.28" viewBox="0 0 18.67 17.28" fill="#FBB040">
  <path d="M9.34 0l2.28 5.85h5.84l-4.72 3.64 2.28 5.86-4.72-3.65-4.72 3.65 2.28-5.86L0 5.85h5.84z"/>
  <path fill="none" d="M0 0h18.67v17.28H0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="18.67" height="17.28" viewBox="0 0 18.67 17.28" fill="#FBB040">
  <path d="M9.34 0l2.28 5.85h5.84l-4.72 3.64 2.28 5.86-4.72-3.65-4.72 3.65 2.28-5.86L0 5.85h5.84z"/>
  <path fill="none" d="M0 0h18.67v17.28H0z"/>
</svg>

</div>

</div>
            {/* <h2 class="text-gray-900 text-lg title-font fot-medium">Shooting Stars</h2> <br></br>
            <div>
            <p class="leading-relaxed text-base">Certainty  intention </p></div> */}
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">Certainty say suffering his him collected intention promotion. Hill sold ham men made lose case. Views abode law heard jokes too.ention promotion. Hill sold ham men made lose case. men made lose case. Views</p>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* hkjhlknkl */}
<section class="text-gray-600 body-font relative">
  <div class="container mx-auto flex  md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 bg-gray-200 px-5 rounded-xl py-24 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left  md:mb-0 items-center text-center">
    <h1 className="title-font sm:text-4xl  mb-4  ">
    <img className="object-cover object-center rounded" alt="hero" src="/logo.png"/>
        <br className="hidden lg:inline-block"/> Download<span className='text-[#DD730A] text-3xl font-bold mx-2'>Selflance  </span>  
        <br className="hidden lg:inline-block"/>Mobile App
      </h1>
      <p class="mb-8 leading-relaxed">Chillwave portland ugh, knausgaard fam polaroid iPhone.<br></br> Man braid swag typewriter affogato.</p>
    
        
    
      <div class="flex lg:flex-row md:flex-col">
        <button class="bg-black inline-flex py-3 px-5 rounded-lg items-center  focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" class="w-6 h-6" viewBox="0 0 512 512">
  <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
</svg>

          <span class="ml-4 flex items-start flex-col leading-none">
            <span class="text-xs text-white mb-1">GET IT ON</span>
            <span class="title-font text-white font-medium">Google Play</span>
          </span>
        </button>
        <button class=" bg-black inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" class="w-6 h-6" viewBox="0 0 305 305">
            <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
            <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
          </svg>
          <span class="ml-4 flex items-start flex-col leading-none">
            <span class="text-xs text-white mb-1">Download on the</span>
            <span class="title-font  text-white font-medium">App Store</span>
          </span>
        </button>
      </div>
    </div>
    {/* absolute right-[80px] top-9 */}
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 hidden  md:block">
      <img class="object-cover object-center rounded overflow-hidden " alt="hero" src="/Background.png"/>
    </div>
  </div>
</section>
      {/* Fqas */}
      <div className='lg:p-[5em]  bg-gray-200 text-center'>
      <h1 className="title-font sm:text-4xl  mb-4  text-[#00538F] text-3xl font-bold text-center">
       FAQS
       
      </h1>
<div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
  <h2 id="accordion-flush-heading-1">
    <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-[#434343] border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
      <span className='mr-[90px]'>Over the course of the last two years, for to design teams t</span>
      <div className='text-[#00538F]'>
      <svg data-plus-icon className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h8M5 1v8" />
</svg>
</div>
    </button>
  </h2>
  <div id="accordion-flush-body-1" className="hidden" aria-labelledby="accordion-flush-heading-1">
    <div className="py-5 border-b border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
      <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
    </div>
  </div>
  <div id="accordion-flush-body-1" className="hidden" aria-labelledby="accordion-flush-heading-1">
    <div className="py-5 border-b border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
      <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
    </div>
  </div>
  <div id="accordion-flush-body-1" className="hidden" aria-labelledby="accordion-flush-heading-1">
    <div className="py-5 border-b border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
      <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
    </div>
  </div>
  <h2 id="accordion-flush-heading-2">
  <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-[#434343] border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
      <span>Over the course of the last two years, for to design teams t</span>
      <div className='text-[#00538F]'>
      <svg data-plus-icon className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h8M5 1v8" />
</svg>
</div>
    </button>
  </h2>
  <div id="accordion-flush-body-2" className="hidden" aria-labelledby="accordion-flush-heading-2">
    <div className="py-5 border-b border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
      <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
    </div>
  </div>
  <h2 id="accordion-flush-heading-2">
  <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-[#434343] border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
      <span>Over the course of the last two years, for to design teams t</span>
      <div className='text-[#00538F]'>
      <svg data-plus-icon className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h8M5 1v8" />
</svg>
</div>
    </button>
  </h2>
  <div id="accordion-flush-body-2" className="hidden" aria-labelledby="accordion-flush-heading-2">
    <div className="py-5 border-b border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
      <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
    </div>
  </div>
  <h2 id="accordion-flush-heading-2">
  <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-[#434343] border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
      <span>Over the course of the last two years, for to design teams t</span>
      <div className='text-[#00538F]'>
      <svg data-plus-icon className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h8M5 1v8" />
</svg>
</div>
    </button>
  </h2>
  <div id="accordion-flush-body-2" className="hidden" aria-labelledby="accordion-flush-heading-2">
    <div className="py-5 border-b border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
      <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
    </div>
  </div>
  <h2 id="accordion-flush-heading-3">
  <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-[#434343] border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
      <span>Over the course of the last two years, for to design teams t</span>
      <div className='text-[#00538F]'>
      <svg data-plus-icon className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h8M5 1v8" />
</svg>
</div>
    </button>
  </h2>
  <div id="accordion-flush-body-3" className="hidden" aria-labelledby="accordion-flush-heading-3">
    <div className="py-5 border-b border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
      <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
      <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
      <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
        <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
      </ul>
    </div>
  </div>
</div>
</div>
{/* sections
 */}
 <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div className='flex flex-row justify-between'>
  <h1 className="title-font sm:text-4xl  mb-4  ">
       <span className='text-[#00538F] text-3xl font-bold'>  Blogs</span>
       
      </h1>
      <div class="flex items-center flex-wrap ">
           

              <a class="text-[#00538F] text-sm font-bold inline-flex items-center md:mb-2 lg:mb-0">Go to Workspace Blog
              <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9-7-9-7v14zm0 0l9-7-9-7V3"/>
</svg>


              </a>
           
            </div>
 

     
      </div>
    <div class="flex flex-wrap -m-4">
      
      <div class="p-4 md:w-1/3">
        
        <div class="h-full  rounded-lg overflow-hidden">
          <img class="lg:h-60 md:h-45 w-full object-cover object-center" src="/card.png" alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-[#00538F] mb-1">12.05.2022</h2>
            <h1 class="title-font text-lg font-bold text-gray-900 mb-3">Over the course of the last two years, for to design teams</h1>
            <p class="leading-relaxed mb-3">Over the course of the last two years, for to design teams</p>
            <div class="flex items-center flex-wrap ">
            <a class="text-[#00538F] inline-flex items-center md:mb-2 lg:mb-0 mr-2">
            <svg class="w-3 h-3 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 8">
    <circle cx="4" cy="4" r="3" />
</svg></a>

              <a class="text-[#00538F] inline-flex items-center md:mb-2 lg:mb-0">Read more
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
           
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        
        <div class="h-full  rounded-lg overflow-hidden">
          <img class="lg:h-60 md:h-45 w-full object-cover object-center" src="/card.png" alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-[#00538F] mb-1">12.05.2022</h2>
            <h1 class="title-font text-lg font-bold text-gray-900 mb-3">Over the course of the last two years, for to design teams</h1>
            <p class="leading-relaxed mb-3">Over the course of the last two years, for to design teams</p>
            <div class="flex items-center flex-wrap ">
            <a class="text-[#00538F] inline-flex items-center md:mb-2 lg:mb-0 mr-2">
            <svg class="w-3 h-3 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 8">
    <circle cx="4" cy="4" r="3" />
</svg></a>

              <a class="text-[#00538F] inline-flex items-center md:mb-2 lg:mb-0">Read more
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
           
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        
        <div class="h-full  rounded-lg overflow-hidden">
          <img class="lg:h-60 md:h-45 w-full object-cover object-center" src="/card.png" alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-[#00538F] mb-1">12.05.2022</h2>
            <h1 class="title-font text-lg font-bold text-gray-900 mb-3">Over the course of the last two years, for to design teams</h1>
            <p class="leading-relaxed mb-3">Over the course of the last two years, for to design teams</p>
            <div class="flex items-center flex-wrap ">
            <a class="text-[#00538F] inline-flex items-center md:mb-2 lg:mb-0 mr-2">
            <svg class="w-3 h-3 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 8">
    <circle cx="4" cy="4" r="3" />
</svg></a>

              <a class="text-[#00538F] inline-flex items-center md:mb-2 lg:mb-0">Read more
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* second last */}
<div className="bg-gradient-to-r from-[#0787E3] to-[#0671BE] md:px-10 md:py-[4em] px-7 py-5 flex md:flex-col flex-row justify-between   ">

        <div>
            <h1 className="text-white md:text-4xl text-xl font-bold ">Get questions</h1>
            <p className="text-white leading-10">Add voice and persoanlity to power</p>
        </div>
        <div className="">
<button className="bg-white text-[#0787E3]  rounded-xl md:px-6 md:py-4 px-4 py-3 ">Read Fqas</button>
        </div>
    </div>
     
      {/* footer */}
      
      <footer class="text-gray-600 body-font">
        <div class="bg-gray-100">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-500 text-sm text-center sm:text-left">Terms of Service
        
      </p>
      <p class="text-gray-500 text-sm text-center sm:text-left mx-2">Privacy Policy
        
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a class="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
  <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
    <img className="object-cover object-center rounded" alt="hero" src="/logo.png"/>
     
      <p class="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
    </div>
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  
  <div class="bg-gray-100">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-500 text-sm text-center sm:text-left">© 2020 SElflance —
        <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">@knyttneve</a>
      </p>
      <span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">Enamel pin tousled raclette tacos irony</span>
    </div>
  </div>
</footer>
      
    </>
  )
}
