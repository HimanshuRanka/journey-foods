import Image from 'next/image'

// Themeing: Peacock theme for the site
// Offer a warm color theme as an alternative aswell. 

export default function Home() {
  return (
    <>
      <header className='border-solid border-b-2 border-black'>
        <div className='border-solid border-b-2 border-black flex justify-center px-4'>
          <h1 className='text-7xl'>
            JOURNEY
          </h1>
        </div>
        <nav className='flex justify-between px-4 sticky top-0'>
          <button>Profile</button>
          <button>Meals</button>
          <button>Generate</button>
          <button>Sign in</button>
        </nav>
      </header>
      <main className="flex min-h-screen flex-col items-center">
        <div className='bg-purple-300 p-8 border-b-2 border-black h-1/2 w-full'>
          <div className='border-solid border-2 border-black bg-white w-full h-full p-4'>
            Todays Plan
          </div>
        </div>
        <div className='bg-lime-300 p-8 h-1/2 w-full'>

        </div>
        
      </main>
    </>
  )
}
