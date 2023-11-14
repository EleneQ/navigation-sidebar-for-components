import { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPage() {
  /* 
    null indicates that nothing has been selected yet.

    this state being in the <Dropdown />'s parent component
    isn't needed in the current state of the application, but
    we're doing this for future proofing. for example, maybe
    the user can select how many of a clothing piece they want 
    and we want to display the total price of whatever they selected
    at the bottom of the page, then that price component would need
    to also know about what option was selected, so it needs to know
    about the selection piece of data/state
  */
  const [selection, setSelection] = useState(null);

  const handleSelection = (option) => {
    setSelection(option);
  };

  /*   
    The value property in the options array simplifies selection
    comparisons, making it easier for when we want to do something 
    based on which option is selected. this is useful for handling
    scenarios like a dropdown menu for spiciness preferences. For
    instance, if the user selects the "Spicy is awesome" option, we 
    can do selected === "spicy" instead of selected === "Spicy is awesome"
    
    Example:
    const spicinessLevels = [
      { label: "Yay! Let's select mild", value: "mild" },
      { label: "Medium is great", value: "medium" },
      { label: "Spicy is awesome", value: "spicy" },
    ];
  */
  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  /* 
    value and onChange is the naming convention for
    props of form control components (any components 
    where the user "enters" a value). the current value
    is passed with the name of value={} and whatever should
    happen when the user changes something is passed with 
    the name of onChange={}.
  */
  return (
    <div className="flex mx-5 my-5">
      <Dropdown
        options={options}
        value={selection}
        onChange={handleSelection}
      />
    </div>
  );
}

export default DropdownPage;
