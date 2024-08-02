
const Switch = (props) => {
  
  const click = props.clicked ? 'right-1' : 'left-1'

  return (
    <div className='w-12 h-7 cursor-pointer bg-green-500 rounded-full relative' onClick={()=>props.setClicked(!props.clicked)}>
      <div className={`bg-white h-5 w-5 rounded-full my-1 mx-[1%] absolute ${click}`}>

      </div>
    </div>
  )
}

export default Switch
