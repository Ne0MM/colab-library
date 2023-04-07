import ColabLogo from './Components/ColabLogo'

export default function Home() {
  return (
    <>
      <div className='flex flex-col justify-center items-center h-screen bg-white'>
        <ColabLogo grow={true} text={true}/>
      </div>
    </>
  )
}
