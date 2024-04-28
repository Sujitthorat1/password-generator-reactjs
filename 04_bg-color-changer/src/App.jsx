import { useState } from 'react'
import './App.css'
function App() {

  let [color, setColor] = useState("yellow")
  return (
    <>

      <div className='w-full h-screen duration-200 '
        style={{ backgroundColor: color }}
      >

        <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2 '>
          <div className='flex flex-wrp bg-pink-100 gap-3 justify-center shadow-lg px-3 py-2 rounded-3xl'>
            <button type="button" className='outline-none px-4 py-1 rounded-full'
              style={{ backgroundColor: 'red', color: 'white' }} onClick={()=>setColor('red')}>
              Red
            </button>
            <button type="button" className='outline-none px-4 py-1 rounded-full'
              style={{ backgroundColor: 'yellow', color: 'white' }} onClick={()=>setColor('yellow')}>
              Yellow
            </button> <button type="button" className='outline-none px-4 py-1 rounded-full'
              style={{ backgroundColor: 'green', color: 'white' } }onClick={()=>setColor("green")}>
              Green
            </button> <button type="button" className='outline-none px-4 py-1 rounded-full'
              style={{ backgroundColor: 'pink', color: 'white' }} onClick={()=>setColor("pink")}>
              Pink
            </button>
            
            <button type="button" className='outline-none px-4 py-1 rounded-full'
              style={{ backgroundColor: 'white', color: 'black' }} onClick={() => setColor("white")}>
              White
            </button>

            <button type="button" className='outline-none px-4 py-1 rounded-full'
              style={{ backgroundColor: 'purple', color: 'black' }} onClick={() => setColor("purple")}>
              Purple
            </button>
            <button type="button" className='outline-none px-4 py-1 rounded-full'
              style={{ backgroundColor: 'orange', color: 'black' }} onClick={() => setColor("orange")}>
              Orange
            </button>
            
            
          </div>
        </div>
      </div>

    </>
  )
}

export default App
