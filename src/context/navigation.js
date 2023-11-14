import { createContext, useState, useEffect } from "react";
//2
const NavigationContext = createContext();

function NavigationProvider({ children }) {
  /* 
    we're using this state to cause our components to re-render
    everytime the path changes so that we can show the appropriate
    components/content

    the initial window.location.pathname is there so that we know
    what the initial path in the address bar was
  */
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  /* 
    here we're handling the user clicking the back and forward
    buttons on the site, which is when the popstate event will 
    be triggered. But this event will be triggered only if the 
    current url was added though the pushState() function.

    when the user clicks the back and forward buttons, the whole
    application will be re-rendered. this is needed so that we can
    display the correct content on the screen.
  */
  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  /* 
    this function exists to handle any programmatic navigation.

    the to parameter represents some path/endpoint/route.

    window.history.pushState({}, "", to); makes it so that we can
    use the back and forward buttons and that the address in the
    address bar updates. we're using pushState instead of
    window.location = "someUrl" because, this way, the site won't
    be refreshed whwn the user navigates around
  */
  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
