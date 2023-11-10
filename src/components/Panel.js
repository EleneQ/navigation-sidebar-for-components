import classNames from "classnames";

function Panel({ children, className, ...rest }) {
  /* 
    mergin the class names defined here and passed in class name/s
  */
  const finalClassNames = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );

  return <div {...rest} className={finalClassNames}>{children}</div>
}

export default Panel;
