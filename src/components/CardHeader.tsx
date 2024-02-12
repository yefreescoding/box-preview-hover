// import utils
import "../styles/bubbleMessages.css";

// import Types
import Messages from "../types/MyObjectTypes";

// import components
import { TrashIcon } from "./TrashIcon";
import { MessageIcon } from "./MessageIcon";
import { Circle } from "./Circle";

interface CardHeaderProps {
  clearMessage: boolean;
  messages: Messages[];
  senderId: number;
}

const ThreeDots = () => {
  return (
    <div className="flex items-center gap-1 text-gray-400">
      <Circle />
      <Circle />
      <Circle />
    </div>
  );
};

const CardHeader = ({ senderId, clearMessage, messages }: CardHeaderProps) => {
  const messagePreview = messages.filter((message) => {
    return message.id === senderId;
  });

  const previewContent =
    messagePreview.length > 0 ? messagePreview[0].message[0] : <ThreeDots />;

  return (
    <header className="h-[105px] relative isolate  p-4 border-b border-blue-200 overflow-hidden">
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
          <div className="z-10 absolute rounded-t-xl inset-[0]  bg-gradient-to-b from-slate-100/0 from-70% to-white"></div>
          <div>
            <p className="mb-2 flex items-center gap-1 font-bold text-base text-blue-400">
              <MessageIcon />
              <span>Latest messages:</span>
            </p>
            <p className="bubble left">
              {/* {messagePreview[0].preview} */}
              {previewContent}
            </p>
          </div>
        </>
      )}
    </header>
  );
};

export default CardHeader;
