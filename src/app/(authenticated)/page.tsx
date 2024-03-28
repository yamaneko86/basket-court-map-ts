import CountCourts from "@/_components/CountCourts";

export default function Home() {
  return (
    <main className="bg-[url('../../public/images/top.jpg')] h-[calc(100%-96px)] flex justify-center items-center">
      <div>
        <CountCourts />
      </div>
    </main>
  );
}
