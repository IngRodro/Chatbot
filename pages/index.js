import { useState } from "react";
import Head from "next/head";
import SendIcon from "../components/atoms/Icons/SendIcon";
import Message from "@cm/Message";

import { colors } from "styles/theme";

import AppLayout from "@ca/AppLayout";
import TextArea from "@ca/TextArea";

export default function Home() {
  const [height, setHeight] = useState(40);
  const [chatHistory, setChatHistory] = useState([]);

  const processMessageBot = (message) => {
    const msg = message.toLowerCase();

    if (msg.includes("hola".toLowerCase())) {
      setChatHistory((prev) => [
        ...prev,
        { name: "Chatbot", message: "Hola, ¿cómo estás?" },
      ]);
    } else if (msg.includes("bien".toLowerCase())) {
      setChatHistory((prev) => [
        ...prev,
        { name: "Chatbot", message: "Me alegro" },
      ]);
    } else if (msg.includes("mal".toLowerCase())) {
      setChatHistory((prev) => [
        ...prev,
        { name: "Chatbot", message: "Lo siento" },
      ]);
    } else {
      setChatHistory((prev) => [
        ...prev,
        { name: "Chatbot", message: "No entiendo" },
      ]);
    }
  };

  return (
    <>
      <Head>
        <title>Chatbot</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <header>
          <h2>Chat</h2>
        </header>
        <section>
          {chatHistory.map((chat, index) => (
            <Message key={index} name={chat.name} message={chat.message} />
          ))}
        </section>
        <footer>
          <SendIcon height={30} width={30} color={colors.primary} />
          <TextArea
            value={""}
            onChange={(target) => {
              const height = parseInt(target.style.height);
              setHeight(height);
            }}
            sendMsg={(text) => {
              setChatHistory([
                ...chatHistory,
                { name: "Usuario", message: text },
              ]);
              setTimeout(() => {
                processMessageBot(text);
              }, 1000);
            }}
          />
        </footer>
      </AppLayout>
      <style jsx>
        {`
          h2 {
            font-size: 30px;
            font-weight: 500;
            margin-left: 10px;
          }
          header {
            align-items: center;
            background: #ffffffaa;
            backdrop-filter: blur(5px);
            border-bottom: 1px solid #eee;
            height: 50px;
            display: flex;
            position: sticky;
            top: 0;
            width: 100%;
          }

          section {
            flex: 1;
            overflow-y: auto;
          }

          footer {
            min-height: 80px;
            display: flex;
            height: ${height + 40}px;
            background: #fff;
            border-top: 1px solid #eee;
            position: sticky;
            align-items: center;
            bottom: 0;
            padding: 20px;
            width: 100%;
            max-height: 230px;

            transition: height 0.3s ease;
          }

          footer > :global(svg) {
            position: absolute;
            bottom: 24px;
            right: 22px;
            z-index: 1;

            transition: transform 0.3s ease;
          }

          footer > :global(textarea) {
            position: relative;
            min-height: 35px;
            resize: none;
            font-size: 18px;
            width: 100%;
            overflow: auto;
            max-height: 200px;
            padding-right: 40px;
          }
        `}
      </style>
    </>
  );
}
