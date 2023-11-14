import useNavigation from "../hooks/use-navigation";
//4
/* 
  this component is used to decide what component to
  show on the screen based on the current route/path.
  if the currentPath === the path associated with the
  child of this component, then that child will be
  displayed, otherwise it won't 
*/
function Route({ path, children }) {
  const { currentPath } = useNavigation();

  if (path === currentPath) {
    return children;
  }
  return null;
}

export default Route;
