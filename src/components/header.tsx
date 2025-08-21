import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed w-[90%] mx-auto top-4 left-0 right-0 z-40 flex items-center justify-center py-0 rounded-2xl bg-black/40 backdrop-blur-md border border-foreground/20">
      <div className="absolute -left-11 top-4">
        <Image
          src="/images/lamp-left.png"
          alt="Wall Lantern Left"
          quality={10}
          width={120}
          height={100}
          className="drop-shadow-[0_0_8px_var(--color-accent)] animate-lantern-flicker"
        />
      </div>

      <Image
        src="/images/rock-logo-1.png"
        alt="Logo"
        width={80}
        height={80}
        className="drop-shadow-[0_0_10px_var(--color-accent)]"
      />
      {/* <h1
        className="text-[24px] md:text-3xl font-bold z-10 tracking-wider 
          drop-shadow-[0_0_2px_var(--color-accent)]
          text-transparent
          bg-clip-text 
          bg-gradient-to-b font-neon from-foreground to-gray-300 
          "
      >
        LOCAL SLOW BAR
      </h1> */}

      <div className="absolute -right-11 top-4">
        <Image
          src="/images/lamp-right.png"
          alt="Wall Lantern Right"
          quality={10}
          width={120}
          height={100}
          className="drop-shadow-[0_0_8px_var(--color-accent)] animate-lantern-flicker"
        />
      </div>
    </header>
  );
}
