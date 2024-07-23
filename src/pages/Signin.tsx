import { BottomWarning } from "../components/Signup/BottomWarning"
import { Button } from "../components/Signup/Button"
import { Heading } from "../components/Signup/Heading"
import { InputBox } from "../components/Signup/InputBox"
import { SubHeading } from "../components/Signup/SubHeading"

export const Signin = () => {
    return <div className='bg-yellow-50 h-screen flex justify-center'>
    <div className='flex flex-col justify-center'>
        <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
            <Heading label={"Sign In"}/>
            <SubHeading label={"Enter your credentials to access your account"}/>
            <InputBox label={"Email"} placeholder={"johndoe@gmail.com"}/>

            <InputBox label={"Password"} placeholder={"123abc"}/>

            <div className='pt-4'>
                <Button label={"Sign In"} />
            </div>
            <BottomWarning label={"Don't have an account?"} buttonText={"Sign Up"} to={'/signup'}/>
        </div>
    </div>
</div>
}