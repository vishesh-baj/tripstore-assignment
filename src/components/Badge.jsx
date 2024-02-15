import PropTypes from "prop-types";

const Badge = ({ categoryName, color, textColor, handleClick }) => {
  return (
    <div
      onClick={() => handleClick(categoryName.toLowerCase())}
      className={`col-span-1 rounded-full px-4 py-2 hover:shadow-sm hover:shadow-gray-500 hover:scale-105 transition  cursor-pointer ${textColor} ${color} `}
    >
      {categoryName}
    </div>
  );
};

Badge.propTypes = {
  categoryName: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Badge;
