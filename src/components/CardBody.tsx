// import Types
import Messages from "../types/MyObjectTypes";

interface CardBodyProps {
  messages: Messages[];
  senderId: number;
  setSenderId: React.Dispatch<React.SetStateAction<number>>;
}

export const CardBody = ({
  setSenderId,
  senderId,
  messages,
}: CardBodyProps) => {
  return (
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
            <h2 className="font-semibold text-slate-600">{message.sender}</h2>
          </div>
          <span className="messages__notifications grid place-items-center font-bold text-sm  w-[23px] h-[23px] aspect-square bg-green-500/40 text-green-600 rounded-full">
            {/* Here will appear the total amount of messages a group has */}
            {message.message.length}
          </span>
        </div>
      ))}
    </div>
  );
};
