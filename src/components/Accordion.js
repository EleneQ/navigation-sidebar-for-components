import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  /* 
    we're deciding which accordion section to expand
    and collapse based on an index that's gotten when
    a user clicks on that section of the accordion.
  */
  const [expandedIndex, setExpandedIndex] = useState(0);

  /* 
      the else if statement is so that the currently selected
      accordion section will collapse if we click it again
    */
  const handleClick = (nextIndex) => {
    setExpandedIndex((prevIndex) => {
      if (prevIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  /* 
    A new event arrow function is created for each iteration 
    through this mapping function. Every callback 
    () => setExpandedIndex(index) function will have a 
    different index value.
  */
  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    /* 
      here we're attaching an onClick event handler to each
      of the accordion's sections so that, when 1 of them is
      clicked, that section sets it's index as the expandedIndex,
      the <Accordion /> gets re-rendered and only the content of
      the section who's index matches the expandedIndex gets
      rendered
    */
    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
