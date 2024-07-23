import { Link } from "react-router-dom"

interface BottomWarningInputs {
    label: string,
    buttonText: string,
    to: string
}

export const BottomWarning = ({label, buttonText, to} : BottomWarningInputs) => {
    return (
        <div className='py-2 text-sm flex justify-center'>
          <div>
            {label}
          </div>
          <Link to={to} className='pointer underline pl-1 cursor-pointer'>{buttonText}</Link>
        </div>
      )
}