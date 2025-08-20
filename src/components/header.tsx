import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed w-[90%] mx-auto top-4 left-0 right-0 z-40 flex items-center justify-center px-8 py-6 rounded-2xl bg-background/40 backdrop-blur-md border border-foreground/20">
      <div className="absolute -left-4 top-4">
        <Image
          src="/images/lamp-left.png"
          alt="Wall Lantern Left"
          width={50}
          height={80}
          className="drop-shadow-[0_0_8px_var(--color-accent)] animate-lantern-flicker"
        />
      </div>

      <h1
        className="text-[24px] md:text-3xl font-bold z-10 tracking-wider 
          drop-shadow-[0_0_2px_var(--color-accent)]
          text-transparent
          bg-clip-text 
          bg-gradient-to-b font-neon from-foreground to-gray-300 
          "
      >
        LOCAL SLOW BAR
      </h1>

      <div className="absolute -right-4 top-4">
        <Image
          src="/images/lamp-right.png"
          alt="Wall Lantern Right"
          width={50}
          height={80}
          className="drop-shadow-[0_0_8px_var(--color-accent)] animate-lantern-flicker"
        />
      </div>
    </header>
  );
}
