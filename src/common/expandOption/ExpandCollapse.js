import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
function ExpandCollapse(props) {
  const [isHide, setHide] = React.useState(false);
  return (
    <div>
      <div onClick={() => setHide(!isHide)} className="header-container">
        {props.header}
      </div>
      {isHide && (
        <div className="option-container">
          {props.options.map((data, index) => {
            return <div key={index}>{data}</div>;
          })}
        </div>
      )}
    </div>
  );
}

ExpandCollapse.propTypes = {
  options: PropTypes.array,
  header: PropTypes.object
};

export default ExpandCollapse;
