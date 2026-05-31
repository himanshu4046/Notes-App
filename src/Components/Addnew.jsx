import PlusIcon from '@iconify-react/line-md/plus';

const Addnew = ({ onOpenForm }) => {
    
  return (
    
    <div onClick={onOpenForm} className=' max-h-screen sticky left-0 top-0 bg-[#6F5D4C] w-fit rounded flex flex-col  justify-center '>
        <button type="button" className='flex flex-col items-center w-12 text-lg  sm:text-xl sm:w-fit sm:p-2 rounded-2xl sm:m-3' >
      <PlusIcon height="2em" />
      <span></span>
    </button>
    </div>
    
  )
}

export default Addnew
