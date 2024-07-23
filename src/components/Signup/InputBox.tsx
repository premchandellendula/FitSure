interface InputBoxInputs {
    label : string,
    placeholder: string
}

export const InputBox = ({label, placeholder}: InputBoxInputs) => {
    return (
        <div>
          <div className='text-sm text-left font-medium py-2'>
            {label}
          </div>
          <input placeholder={placeholder} className='w-full px-2 py-1 border rounded border-slate-200'/>
        </div>
      )
}