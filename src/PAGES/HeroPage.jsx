import React from 'react'

const HeroPage = () => {
  return (
    <>
    <div className='text-center bg-gray-300 h-auto m-10 p-10 border border-black rounded '>
        <h1 className='text-blue-500'>HERO PAGE</h1>
    </div>
    <div className='text-center bg-gray-300 h-auto m-10 p-10 border border-black rounded '>
        <h1 className='text-xs'>Extra small</h1>
        <h1 className='text-sm'>Small</h1>
        <h1 className='text-base'>Base</h1>
        <h1 className='text-lg'>Large</h1>
        <h1 className='text-xl'>Extra large</h1>
        <h1 className='text-2xl'>2xl</h1>
        <h1 className='text-3xl'>3xl</h1>
        <h1 className='text-4xl'>4xl</h1>
        <h1 className='text-5xl'>5xl</h1>
        <h1 className='text-6xl'>6xl</h1>
        <h1 className='text-7xl'>7xl</h1>
        <h1 className='text-8xl'>8xl</h1>
        <h1 className='text-9xl'>9xl</h1>
    </div>

    <div className='bg-blue-300 h-auto w-[200px] border border-black m-10 p-2'>
      <h1 className='text-right'>text right</h1>
      <h1 className='text-left'>text left</h1>
      <h1 className='text-center'>text center</h1>
      <h1 className='text-justify'>text justify</h1>
    </div>

    <div className='bg-blue-300 h-auto w-[200px] border border-black m-10 p-2'>
      <h1 className='underline'>UNDER LINE</h1>
      <h1 className='overline'>OVER LINE</h1>
      <h1 className='line-through'>LINE THROUGH</h1>
      <h1 className='no-underline'>NO UNDERLINE</h1>
    </div>

    <div className='bg-blue-300 h-auto w-[200px] border border-black m-10 p-2'>
      <h1 className='uppercase'>Upper Case</h1>
      <h1 className='lowercase'>Lower Case</h1>
      <h1 className='capitalize'>capitalize word</h1>
      <h1 className='normal-case'>NoRmAl CaSe</h1>
    </div>

    <div className='bg-blue-300 h-auto w-[400px] border border-black m-10 p-2'>
      <div className='bg-pink-300 h-[50px] w-[100px] m-5 border-2'> </div>
      <div className='bg-pink-300 h-[50px] w-[100px] m-5 border-t-2'> </div>
      <div className='bg-pink-300 h-[50px] w-[100px] m-5 border-b-2'> </div>
      <div className='bg-pink-300 h-[50px] w-[100px] m-5 border-r-2'> </div>
      <div className='bg-pink-300 h-[50px] w-[100px] m-5 border-l-2'> </div>
    </div>

    {/* <div className='bg-blue-300 h-auto w-[400px] border border-black m-10 p-2'>
      <div className='bg-pink-300 h-[50px] w-[100px] m-5 border-2 rounded-none'> </div>
      <div className='bg-pink-300 h-[50px] w-[100px] m-5 border-2 rounded-sm'> </div>
      <div className='bg-pink-300 h-[50px] w-[100px] m-5 border-2 rounded-md'> </div>
      <div className='bg-pink-300 h-[50px] w-[100px] m-5 border-2 rounded-lg'> </div>
      <div className='bg-pink-300 h-[50px] w-[100px] m-5 border-2 rounded-xl'> </div>
      <div className='bg-pink-300 h-[50px] w-[100px] m-5 border-2 rounded-3xl'> </div>
      <div className='bg-pink-300 h-[100px] w-[100px] m-5 border-2 rounded-full'> </div>
      <div className='bg-pink-300 h-[50px] w-[100px] m-5 border-2 rounded border-hidden'> </div>
      <div className='bg-blue-300 h-[50px] w-[100px] m-2 border-2 rounded border shadow-md shadow-black'>
    </div> */}

    <div className=' bg-yellow-100 m-10 p-10 flex flex-col gap-2 h-auto w-[400px]'>
      <div class="flex flex-col">
        <div class="flex flex-row">
          <div className='bg-pink-200 h-auto w-[150px] p-10'>COL1</div>
          <div className='bg-pink-300 h-auto w-[150px] p-10'>COL2</div>
          {/* <div class="bg-pink-300 h-[50px] w-[150px]">Box 1</div>
          <div class="bg-pink-200 h-[50px] w-[150px]">Box 2</div> */}
        </div>
      </div>
    
      <div class="flex flex-col">
        <div class="flex flex-row">
          <div className='bg-orange-300 h-auto w-[100px] p-10'>COL1</div>
          <div className='bg-orange-400 h-auto w-[100px] p-10'>COL2</div>
          <div className='bg-orange-300 h-auto w-[100px] p-10'>COL3</div>
          {/* <div class="bg-orange-200 h-[50px] w-[100px]">Box 1</div>
          <div class="bg-orange-300 h-[50px] w-[100px]">Box 2</div>
          <div class="bg-orange-400 h-[50px] w-[100px]">Box 3</div> */}
        </div>
      </div>

      <div class="flex flex-col w-[300px]">
        <div className='bg-orange-300 h-auto w-[300px] p-10'>COL1</div>
        {/* <div class="bg-pink-200 h-[50px]">Box 3</div> */}
      </div>
    </div>
    

    

    </>
  )
}

export default HeroPage
