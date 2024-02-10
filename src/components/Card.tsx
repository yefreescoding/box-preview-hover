import { useState } from "react";

// import Types
import Messages from "../types/MyObjectTypes";

// import components
import CardHeader from "./CardHeader";
import { CardBody } from "./CardBody";
import { CardFooter } from "./CardFooter";

interface CardPRops {
  messages: Messages[];
}

const Card = ({ messages }: CardPRops) => {
  const [senderId, setSenderId] = useState<number>(0);
  const [clearMessage, setClearMessage] = useState<boolean>(false);

  return (
    <div
      id="card"
      className="card w-full md:w-[35ch] flex flex-col gap-4 border border-blue-200 bg-white rounded-xl shadow-md "
    >
      <CardHeader
        messages={messages}
        senderId={senderId}
        clearMessage={clearMessage}
      />
      <CardBody
        messages={messages}
        senderId={senderId}
        setSenderId={setSenderId}
      />
      <CardFooter setClearMessage={setClearMessage} />
    </div>
  );
};

export default Card;
