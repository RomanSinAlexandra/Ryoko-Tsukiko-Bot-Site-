import Image from "next/image";

export default function Home() {
    return(
        <main className="flex min-h-screen w-full items-center justify-center">
            <Image
              src="/Logo.svg"
              alt="Ryoko logo"
              width={952}
              height={405}
            />
        </main>
    );
}