"use client";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { useChat } from "ai/react";
import MessageList from "./MessageList";

type Props = {
  chatId: number;
};

const ChatComponent = (props: Props) => {
  // const { data, isLoading } = useQuery({
  //     queryKey: ["chat", chatId],
  //     queryFn: async () => {
  //       const response = await axios.post<Message[]>("/api/get-messages", {
  //         chatId,
  //       });
  //       return response.data;
  //     },
  //   });

  const { input, handleInputChange, handleSubmit, messages } = useChat({
    api: "/api/chat",
  });
  return (
    <div className="relative max-h-screen overflow-scroll">
      <div className="sticky top-0 inset-x-0 p-2 bg-whitw h-fit">
        <h3 className="text-xl font-bold">Chat</h3>
      </div>
      {/* Messages */}
      <MessageList messages={messages} isLoading={false} />
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="sticky bottom-0 inset-x-0 px-2 py-4 bg-white"
      >
        <div className="flex">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask any question..."
            className="w-full"
          />
          <Button className="bg-blue-600 ml-2">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChatComponent;
