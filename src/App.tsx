import { useState } from "react";
import data from "./data/messages.json";

import { MessageIcon } from "./components/MessageIcon";
import { TrashIcon } from "./components/TrashIcon";

function App() {
  const messages = data;
  const [senderId, setSenderId] = useState<number>(0);
  const [clearMessage, setClearMessage] = useState<boolean>(false);

  return (
    <main className="min-h-[100dvh] grid place-items-center h-full bg-slate-100">
      <section className="">
        <h1 className="mb-8 font-bold text-2xl text-capitalize text-center">
          Preview Messages
        </h1>
        <div
          id="card"
          className="card w-full md:w-[35ch] flex flex-col gap-4 border border-blue-200 bg-white rounded-xl shadow-md "
        >
          <header className="relative isolate  p-4 border-b border-blue-200 overflow-hidden">
            {clearMessage ? (
              <div>
                <p className="mb-2 flex items-center gap-1 font-bold text-base text-red-600">
                  <TrashIcon />
                  <span>Clear Recent Messages</span>
                </p>
                <p className="font-semibold text-red-400 whitespace-nowrap">
                  Clear all recent messages permanently.
                </p>
              </div>
            ) : (
              <>
                <div className="absolute rounded-t-xl inset-[0]  bg-gradient-to-r from-slate-100/0 from-70% to-white"></div>
                <div>
                  <p className="mb-2 flex items-center gap-1 font-bold text-base text-blue-400">
                    <MessageIcon />
                    <span>Latest messages:</span>
                  </p>
                  <p className="bg-slate-200 rounded-xl px-4 w-fit font-regular text-slate-700 whitespace-nowrap">
                    {messages[senderId].preview}
                  </p>
                </div>
              </>
            )}
          </header>
          <div className="p-3 flex flex-col items-start gap-2">
            {/* Different groups and chats will appear here from a database / json file */}
            {messages.map((message) => (
              <div
                key={message.id}
                className="messages  p-2 w-full cursor-pointer flex  items-center justify-between rounded-lg hover:bg-slate-200/50 transition-colors"
                onMouseEnter={() => {
                  setSenderId(message.id - 1);
                  console.log(senderId);
                }}
                onMouseLeave={() => {
                  setSenderId(0);
                }}
              >
                <div className="flex items-center gap-2">
                  <img
                    src={message.image}
                    alt={`Portrait image of ${message.sender}`}
                    className="w-12 h-12 rounded-full object-center border border-slate-600 p-1"
                  />
                  <h2 className="font-semibold text-slate-600">
                    {message.sender}
                  </h2>
                </div>
                <span className="messages__notifications grid place-items-center font-bold text-sm  w-[23px] h-[23px] aspect-square bg-green-500/40 text-green-600 rounded-full">
                  {/* Here will appear the total amount of messages a group has */}
                  {message.message.length}
                </span>
              </div>
            ))}
          </div>
          <footer className="p-3 border-t border-blue-200">
            <button
              type="button"
              className="p-2 w-full text-center rounded-lg border border-red-300 bg-red-200/60 text-red-600 hover:bg-red-200 transition-colors font-semibold"
              onMouseEnter={() => {
                setClearMessage(true);
              }}
              onMouseLeave={() => {
                setClearMessage(false);
              }}
            >
              Clear Recent
            </button>
          </footer>
        </div>
      </section>
    </main>
  );
}

export default App;
