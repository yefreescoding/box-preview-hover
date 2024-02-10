// import message data JSON
import data from "./data/messages.json";

// import Types
import MyObjectMessages from "./types/MyObjectTypes";

// Component imports
import Card from "./components/Card";

function App() {
  const messages: MyObjectMessages[] = data;

  return (
    <main className="min-h-[100dvh] grid place-items-center h-full bg-slate-100">
      <section className="">
        <h1 className="mb-8 font-bold text-2xl text-capitalize text-center">
          Preview Messages
        </h1>
        <Card messages={messages} />
      </section>
    </main>
  );
}

export default App;
