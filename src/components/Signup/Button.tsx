export const Button = ({label}: {label: string}) => {
    return <button type='button' className='text-white bg-gray-800 hover:bg-gray-900 font-medium w-full rounded-lg text-sm px-5 py-2.5 me-2 mb-2'>
    {label}
  </button>
}