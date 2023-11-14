import useNavigation from "../hooks/use-navigation";
//4
/* 
  the Route component is created to conditionally render
  its children based on the current path. if the currentPath
  === the path associated with the child of this component,
  then that child will be displayed, otherwise it won't 
*/
function Route({ path, children }) {
  const { currentPath } = useNavigation();

  if (path === currentPath) {
    return children;
  }
  return null;
}

export default Route;
