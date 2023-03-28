import React from "react";
import "./haathiChatBot.scss";
import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";

import { Modal } from "antd";

// export const HaathiChatBot = () => {
//   const [open, isOpen] = useState({ logo: true, search: false, chat: false });

//   const handleExpand = () => {
//     console.log("expanded");
//     isOpen({
//       ...open,
//       logo: !open.logo,
//       search: !open.search,
//     });
//   };

//   return <>{open.logo && <Avatar src={haathilog} alt="log" />}</>;
// };

export const AskHaathiSearch = () => {
  const steps = [
    {
      id: "Greet",

      message: "Hello, Welcome to our shop",

      trigger: "Done",
    },

    {
      id: "Done",

      message: "Please enter your name!",

      trigger: "waiting1",
    },

    {
      id: "waiting1",

      user: true,

      trigger: "Name",
    },

    {
      id: "Name",

      message: "Hi {previousValue}, Please select your issue",

      trigger: "issues",
    },

    {
      id: "issues",

      options: [
        {
          value: "React",

          label: "React",

          trigger: "React",
        },

        { value: "Angular", label: "Angular", trigger: "Angular" },
      ],
    },

    {
      id: "React",

      message:
        "Thanks for letting your React issue, Our team will resolve your issue ASAP",

      end: true,
    },

    {
      id: "Angular",

      message:
        "Thanks for letting your Angular issue, Our team will resolve your issue ASAP",

      end: true,
    },
  ];
  return (
    <>
      <Modal>
        <Segment floated="center">
          <ChatBot steps={steps} />
        </Segment>
      </Modal>
    </>
  );
};