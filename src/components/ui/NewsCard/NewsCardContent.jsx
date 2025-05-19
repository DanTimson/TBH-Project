import React from "react";
import PropTypes from "prop-types";

export default function NewsCardContent({ text }) {
  return (
    <div className="news-card-content">
      <p className="news-card-text">
        {text}
      </p>
    </div>
  );
}

NewsCardContent.propTypes = {
  text: PropTypes.string.isRequired
};
