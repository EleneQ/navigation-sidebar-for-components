import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  /* 
    Using the capture phase (true) in addEventListener is essential.
    Ignoring the capture phase would lead to incorrect detection of
    clicks outside the dropdown. When an option is clicked, its
    onclick callback is invoked, triggering a state update with
    handleOptionClick(). Although the re-render doesn't happen instantly,
    it occurs before the bubble phase completes. Therefore, the options
    are unmounted before the browser processes whether the dropdown contains
    the clicked element. Utilizing the capture phase ensures our code checks
    whether the click occurred inside or outside the dropdown before this
    component re-renders.

    The "if (!divEl.current) return;" statement ensures a safe return if
    divEl doesn't reference this component's top-level parent.
  */
  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  /* 
    the ? in {selection?.label || "Select..."} this makes it
    so that, if selection.label is null or undefined, then Select... 
    gets displayed, otherwise the label is displayed

    The ref={divEl} informs React that divEl is the DOM element that
    we want to reference.
  */
  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
