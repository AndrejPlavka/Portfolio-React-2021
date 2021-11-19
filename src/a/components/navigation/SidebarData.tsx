import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { IconArrowDown, IconArrowUp, IconDownload } from "../../assets/icons";
import { cv } from "../../../a/PortfolioData";
import React from "react";

export const SidebarData = [
  {
    title: "About",
    path: "/about",
    // icon: <AiIcons.AiFillHome />,
    iconClosed: <IconArrowDown />,
    iconOpened: <IconArrowUp />,

    // subNav: [
    //   {
    //     title: "About",
    //     path: "/about",
    //   },
    //   {
    //     title: "Experiences",
    //     path: "#exp",
    //   },
    //   {
    //     title: "Skills",
    //     path: "#skills",
    //   },
    //   {
    //     title: "Random Facts",
    //     path: "#rf",
    //   },
    // ],
  },
  {
    title: "Portfolio",
    path: "/portfolio",
    iconClosed: <IconArrowDown />,
    iconOpened: <IconArrowUp />,

    subNav: [
      {
        title: "Redux Counter",
        path: "/counter",
        cName: "sub-nav",
      },
      {
        title: "Hackertyper",
        path: "/hackertyper",
        cName: "sub-nav",
      },
      {
        title: "Todo App",
        path: "/todoapp",
        cName: "sub-nav",
      },
      {
        title: "Memory Game",
        path: "/pexeso",
        cName: "sub-nav",
      },
      {
        title: "Blog",
        path: "/blog",
        cName: "sub-nav",
      },
      {
        title: "Tunes App",
        path: "/tunesapp",
        cName: "sub-nav",
      },
      // {
      //   title: "Tic-tac-tou",
      //   path: "",
      //   cName: "sub-nav",
      // },
    ],
  },
  {
    title: "CV",
    path: cv.resume,
    icon: <IconDownload />,
  },
];

// Inspiration:
// export const SidebarData = [
//     {
//       title: "Overview",
//       path: "/overview",
//       icon: <AiIcons.AiFillHome />,
//       iconClosed: <RiIcons.RiArrowDownSFill />,
//       iconOpened: <RiIcons.RiArrowUpSFill />,

//       subNav: [
//         {
//           title: "Users",
//           path: "/overview/users",
//           icon: <IoIcons.IoIosPaper />,
//         },
//         {
//           title: "Revenue",
//           path: "/overview/revenue",
//           icon: <IoIcons.IoIosPaper />,
//         },
//       ],
//     },
//     {
//       title: "Reports",
//       path: "/reports",
//       icon: <IoIcons.IoIosPaper />,
//       iconClosed: <RiIcons.RiArrowDownSFill />,
//       iconOpened: <RiIcons.RiArrowUpSFill />,

//       subNav: [
//         {
//           title: "Reports",
//           path: "/reports/reports1",
//           icon: <IoIcons.IoIosPaper />,
//           cName: "sub-nav",
//         },
//         {
//           title: "Reports 2",
//           path: "/reports/reports2",
//           icon: <IoIcons.IoIosPaper />,
//           cName: "sub-nav",
//         },
//         {
//           title: "Reports 3",
//           path: "/reports/reports3",
//           icon: <IoIcons.IoIosPaper />,
//         },
//       ],
//     },
//     {
//       title: "Products",
//       path: "/products",
//       icon: <FaIcons.FaCartPlus />,
//     },
//     {
//       title: "Team",
//       path: "/team",
//       icon: <IoIcons.IoMdPeople />,
//     },
//     {
//       title: "Messages",
//       path: "/messages",
//       icon: <FaIcons.FaEnvelopeOpenText />,

//       iconClosed: <RiIcons.RiArrowDownSFill />,
//       iconOpened: <RiIcons.RiArrowUpSFill />,

//       subNav: [
//         {
//           title: "Message 1",
//           path: "/messages/message1",
//           icon: <IoIcons.IoIosPaper />,
//         },
//         {
//           title: "Message 2",
//           path: "/messages/message2",
//           icon: <IoIcons.IoIosPaper />,
//         },
//       ],
//     },
//     {
//       title: "Support",
//       path: "/support",
//       icon: <IoIcons.IoMdHelpCircle />,
//     },
//   ];
