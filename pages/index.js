import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import SendIcon from "../components/atoms/Icons/SendIcon";
import Message from "@cm/Message";

import { colors } from "styles/theme";

import AppLayout from "@co/AppLayout";
import TextArea from "@ca/TextArea";
import Loading from "@ca/Icons/Loading";

import database from "../database/ia-database.json";

export default function Home() {
  const [height, setHeight] = useState(40);
  const [chatHistory, setChatHistory] = useState([]);
  const [text, setText] = useState("");
  const containerRef = useRef(null);
  const [scrollDown, setScrollDown] = useState(false);
  const [loading, setLoading] = useState(false);

  const processMessageBot = (message) => {
    const msg = message.toLowerCase();

    if (msg.includes("/clear")) {
      setChatHistory([]);
      return;
    }

    const response = database.find((item) => {
      const { keywords } = item;
      const contains = keywords.find((keyword) =>
        msg.includes(keyword.toLowerCase())
      );
      return contains;
    });

    response
      ? setChatHistory((prev) => [
          ...prev,
          {
            name: "Chatbot",
            message:
              response.answers[
                Math.floor(Math.random() * response.answer.length)
              ],
          },
        ])
      : setChatHistory((prev) => [
          ...prev,
          { name: "Chatbot", message: "No entiendo lo que dices" },
        ]);
  };

  useEffect(() => {
    if (scrollDown) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
      setScrollDown(false);
    }
  }, [scrollDown]);

  const SendMessage = () => {
    if (!loading && text.trim() !== "") {
      setLoading(true);
      setChatHistory([...chatHistory, { name: "Usuario", message: text }]);
      setScrollDown(true);
      setText("");
      setTimeout(() => {
        processMessageBot(text);
        setScrollDown(true);
        setLoading(false);
      }, 1000);
    }
  };

  const onClickButton = () => {
    SendMessage();
    setText("");
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
        <section ref={containerRef}>
          {chatHistory.map((chat, index) => (
            <Message
              key={index}
              name={chat.name}
              message={chat.message}
              avatar={chat.name === "Chatbot" ? "chatbot.png" : "user.png"}
              background={
                chat.name === "Chatbot" ? colors.secondary : colors.primary
              }
            />
          ))}
        </section>
        <footer id="footer">
          {loading ? (
            <Loading></Loading>
          ) : (
            <SendIcon
              className="icon"
              height={30}
              width={30}
              color={colors.primary}
              onClick={onClickButton}
            />
          )}
          <TextArea
            value={text}
            onChange={(target, text) => {
              setText(text);
              const height = parseInt(target.style.height);
              setHeight(height);
            }}
            sendMsg={() => {
              SendMessage();
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
            border-bottom: 1px solid #aeaeae;
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
            border-top: 1px solid #aeaeae;
            position: sticky;
            align-items: center;
            bottom: 0;
            padding: 20px;
            width: 100%;
            max-height: 150px;

            transition: height 0.3s ease;
          }

          footer > :global(svg) {
            position: absolute;
            bottom: 24px;
            right: 30px;
            z-index: 1;
          }

          footer > :global(svg):hover {
            cursor: pointer;
          }

          footer > :global(div) {
            position: absolute;
            bottom: 35px;
            right: 30px;
            z-index: 1;
          }

          footer > :global(textarea) {
            position: relative;
            min-height: 32px;
            resize: none;
            background: #fcfcfc;
            border: 1px solid #eee;
            font-size: 18px;
            width: 100%;
            overflow: auto;
            box-sizing: border-box;
            box-shadow: 2px 2px 2px #bbb;
            max-height: 200px;
            padding-right: 30px;

            transition: transform 0.3s ease;
          }

          section::-webkit-scrollbar,
          footer > :global(textarea)::-webkit-scrollbar {
            -webkit-appearance: none;
          }

          section::-webkit-scrollbar:vertical,
          footer > :global(textarea)::-webkit-scrollbar:vertical {
            width: 10px;
          }

          section::-webkit-scrollbar-button:decrement,
          section::-webkit-scrollbar-button,
          footer > :global(textarea)::-webkit-scrollbar-button:increment,
          footer > :global(textarea)::-webkit-scrollbar-button {
            display: none;
          }

          section::-webkit-scrollbar:horizontal,
          footer > :global(textarea)::-webkit-scrollbar:horizontal {
            height: 10px;
          }

          section::-webkit-scrollbar-thumb,
          footer > :global(textarea)::-webkit-scrollbar-thumb {
            background-color: #797979;
            border-radius: 20px;
            border: 2px solid #f1f2f3;
          }

          section::-webkit-scrollbar-track,
          footer > :global(textarea)::-webkit-scrollbar-track {
            border-radius: 10px;
          }

          footer > :global(textarea):focus {
            outline: none;
            border: 1px solid ${colors.black};
          }
        `}
      </style>
    </>
  );
}
