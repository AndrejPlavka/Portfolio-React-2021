import { NavLink } from "react-router-dom";
import React from "react";
import styled from "styled-components/macro";

const dropdownItems = [
  {
    id: 1,
    url: "/development",
    text: "home",
  },
  {
    id: 2,
    url: "#projects",
    text: "projects",
  },
  {
    id: 3,
    url: "#contact",
    text: "contact",
  },
];

type DropdownItemType = {
  id: number;
  url: any;
  text: string;
};

type DropdownProps = {
  dropdownText?: string;
  items?: DropdownItemType[];
};

export const Dropdown = ({
  dropdownText = "Home",
  items = dropdownItems,
}: DropdownProps) => {
  const drobdownButtonRef = React.useRef<HTMLButtonElement | null>(null);
  const dropdownListRef = React.useRef<HTMLUListElement | null>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(-1);

  // handlers: **********************************************************
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const keyHandler = (event: React.KeyboardEvent) => {
    if (isOpen) {
      switch (event.key) {
        case "Escape":
          setIsOpen(false);
          break;
        case "ArrowDown":
          const nodeList = dropdownListRef.current!.querySelectorAll("a");
          if (activeIndex === items.length - 1) return;
          nodeList[activeIndex + 1].focus();
          break;
        case "ArrowUp":
          const nodeList2 = dropdownListRef.current!.querySelectorAll("a");
          if (activeIndex === 0) return;
          nodeList2[activeIndex - 1].focus();
          break;
      }
    }
  };

  const handleClickOutside = (event: any) => {
    if (
      dropdownListRef.current!.contains(event.target) ||
      drobdownButtonRef.current!.contains(event.target)
    ) {
      return;
    }
    setIsOpen(false);
  };

  // close dropdown on mouse click outside of menu
  React.useEffect(() => {
    if (isOpen) {
      dropdownListRef.current!.querySelector("a")!.focus();
      document.addEventListener("mouseup", handleClickOutside);
    } else {
      document.removeEventListener("mouseup", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [isOpen]);

  React.useEffect(() => {
    if (!isOpen) {
      setActiveIndex(-1);
    }
  }, [isOpen]);

  const focusHandler = (index: number) => {
    setActiveIndex(index);
  };
  // template: **********************************************************
  return (
    <DivWrapper onKeyUp={keyHandler}>
      <DropdownButton
        aria-haspopup="true"
        aria-controls="dropdown1"
        onClick={handleClick}
        ref={drobdownButtonRef}
        onFocus={() => setActiveIndex(-1)}
      >
        {dropdownText}
      </DropdownButton>
      <DropdownList
        id="dropdown1"
        ref={dropdownListRef}
        active={isOpen}
        role="list"
        onClick={handleClick}
      >
        {items.map((item, index) => (
          <li key={item.id}>
            <a href={item.url} onFocus={() => focusHandler(index)}>
              {item.text}
            </a>
          </li>
        ))}
      </DropdownList>
    </DivWrapper>
  );
};

// styled componets: **********************************************************
export const DivWrapper = styled.div`
  position: relative;
`;

export const DropdownButton = styled.button`
  align-items: center;
  background-color: inherit;
  /* border: 1px solid transparent; */
  /* border-radius: 3px;
  border-color: #ccc; */
  color: inherit;
  display: flex;
  font-size: inherit;
  max-width: 160px;
  padding: 1em;

  &:after {
    content: "";
    border-bottom: 1px solid #000;
    border-right: 1px solid #000;
    height: 0.5em;
    margin-left: 0.75em;
    width: 0.5em;
    transform: rotate(45deg);
  }
`;

export const DropdownList = styled.ul<{ active: boolean }>`
  background-color: #ececec;
  color: black;
  display: ${(props) => (props.active ? "block" : "none")};
  margin: 0;
  min-width: 180px;
  padding: 0;
  position: absolute;
  li {
    list-style: none;
    margin: 0;
    a,
    a:link {
      text-decoration: none;
      display: block;
      padding: 0.5em;
      &:hover {
        background-color: lightblue;
      }
    }
  }
`;
