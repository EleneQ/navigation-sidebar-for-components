import PropTypes from "prop-types"; //don't need the import because we're not using any of PropTypes' default checks
import className from "classnames"; //can also be called classnames

/* 
  whenever we have a component that's trying to
  create the equivalent to a plain HTML element like Button
  is doing with button, that component is called the wrapper
  and the plain html one's called the underlying element.

  we're using seperate props for button defining purpose like
  primary, secondary, etc. just for slight convenience when
  using the <Button primary round /> component like this instead
  of using a string for customization like <Button purpose="primary" round />.

  the ...rest rest operator, which turnes all the additional props
  into a seperate array is for taking any of those other passed in props
  (like onClick, etc.) and assigning them to the button html element
  as attributes.
  */
function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = className(
    rest.className,
    "flex items-center px-3 py-1.5 border mb-2",
    {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-900 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "!text-blue-500": outline && primary,
      "!text-gray-900": outline && secondary,
      "!text-green-500": outline && success,
      "!text-yellow-400": outline && warning,
      "!text-red-500": outline && danger,
    }
  );

  /* 
    spreading the rest variable. in the rest array, we
    can have onClick passed in, etc.
  */
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  /* 
  this is custom validation for the button
  component to make sure that only 1 of the
  button variations (primary, etc.) has the
  value of true.

  Number(false) = 0, Number(true) = 1,
  Number(undefined) = NaN. if one of the props isn't passed
  in from the <Button /> component when the component's being
  used, it's gonna have the value of undefined and, since we can't
  use NaN for calculating the count's value, we're
  doing !!undefined, which returns false and Number(false) = 0,
  which we can use
*/
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, success, warning, danger can be true"
      );
    }
  },
};

export default Button;
