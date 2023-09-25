import Image from 'next/image'

export default function Home() {
  return (
   <main>

      <div className='border-[50px] border-solid border-black w-[700px] p-[30px] mt-[20px] mx-auto'>
        <div className='w-auto h-[600px] bg-orange-950 overflow-hidden blur-[2px] '>
          <div className='w-[450px] h-[150px] blur-[1px] bg-yellow-600 my-[20px] mx-auto  rounded-[9px] rotate-[-0.6deg]' id='one'></div>
          <div className='w-[475px] h-[200px] blur-[1px] bg-red-700 mt-[0px] mx-auto mb-[20px]  rounded-tl-[8px] rounded-br-[8px] rounded-tr-[10px] rounded-bl-[10px]'></div>
          <div className='w-[91%] h-[28%] bg-red-900 m-auto blur-[2px] rounded rounded-tl-[30px] rounded-br-[60px] rounded-tr-[25px] rounded-bl-[12px]'></div>
        </div>
      </div>
      
   </main>
  )
}
