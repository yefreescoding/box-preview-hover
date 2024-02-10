// import Types
import Messages from "../types/MyObjectTypes";

// import components
import { TrashIcon } from "./TrashIcon";
import { MessageIcon } from "./MessageIcon";

interface CardHeaderProps {
  clearMessage: boolean;
  messages: Messages[];
  senderId: number;
}

const CardHeader = ({ senderId, clearMessage, messages }: CardHeaderProps) => {
  return (
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
  );
};

export default CardHeader;
