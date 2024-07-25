import Navigation from "../Navigation";
import Form from "./Form";

export default function page() {
  return (
    <main className='h-full bg-[#111222] text-white flex flex-row items-center justify-between'>
        <Navigation/>
        {/* A good looking contact us form with glassmorphism inputs */}
        <Form/>
    </main>
  )
}
