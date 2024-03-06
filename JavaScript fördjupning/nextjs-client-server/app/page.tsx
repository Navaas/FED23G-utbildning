import CountButton from "./ui/CountButton";

export default function Home() {
  return (
    <main className="p-4 flex flex-col gap-4">
      <h1 className="text-xl my-4">Home</h1>
      <p className="font-bold">Welcome yo your Next.js app!</p>
      {/* Bestäm på knappen hur stora steg det ska hoppa */}
      <CountButton step={1} />
      <CountButton step={-1} />
      <CountButton step={100} />
      <CountButton step={-100} />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsum
        esse amet tempora eius reiciendis labore non dolorem laborum quidem
        totam facere possimus quos soluta, voluptatem odio assumenda, suscipit
        consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsum
        esse amet tempora eius reiciendis labore non dolorem laborum quidem
        totam facere possimus quos soluta, voluptatem odio assumenda, suscipit
        consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>
    </main>
  );
}
