import { React, PropTypes } from "libraries";

const MyButton = ({ title, isWide, isMobile, className, onClick }) => {

  return (
  <div>
    <button onClick={ onClick } className={`button ${ isWide ? 'button-block' : '' }${isMobile ? 'button-wide-mobile' : ''}${className}`}>{title}</button>
  </div>
  );
};

MyButton.propTypes = {
  title: PropTypes.string,
  isWide: PropTypes.bool,
  isMobile: PropTypes.bool
};

MyButton.defaultProps = {
  title: "",
  isWide: false,
  isMobile: false
};

export default MyButton;
