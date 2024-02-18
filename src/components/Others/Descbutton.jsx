/* eslint-disable react/prop-types */
import {
  PhoneFilled,
  MailFilled,
  LinkedinFilled,
  GithubFilled,
} from "@ant-design/icons";
export default function Descbutton({ text, mykey }) {
  let icons = [
    {
      text: "Buzz me",
      link: "",
      icon: <PhoneFilled key={mykey} />,
    },
    {
      text: "abhisekmaiti19@gmail.com",
      link: "",
      icon: <MailFilled key={mykey} />,
    },
    {
      text: "I'm on Linkedin",
      link: "",
      icon: <LinkedinFilled key={mykey} />,
    },
    {
      text: "Github",
      link: "",
      icon: <GithubFilled key={mykey} />,
    },
  ];
  return (
    <button className="px-6 py-1 text-[1.4rem] bg-black/50 text-white/50 hover:text-white rounded-lg flex items-center gap-4 transition-all duration-200 ease-in-out">
      {icons.map((item) => {
        if (item.text === text) {
          return item.icon;
        }
      })}
      {text}
    </button>
  );
}
