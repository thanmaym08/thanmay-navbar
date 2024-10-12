import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <h1 aria-setsize={34}>Coffee!!!</h1>
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F6c%2F24%2Fdb%2F6c24dbb19ec2c665d7ed97a8007554d8.jpg&f=1&nofb=1&ipt=4abd99f7dfdec6e71488b5e452e78522a5282306af16f95fc455ec47d9edfdd0&ipo=images"
        alt="coffeee"
        height={600}
        width={600}
        className="object-fill h-600 w-600 "




      />


    </div >


  );
}
