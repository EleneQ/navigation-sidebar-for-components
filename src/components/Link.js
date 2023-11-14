import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";
//3
/* 
  the goal of this component is to override normal
  navigation and be used instead of the default <a>
  tags
*/
function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  );

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    /* 
      this is what stops the total page refresh so that
      we can use programatic navigation
    */
    event.preventDefault();
    navigate(to);
  };

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
