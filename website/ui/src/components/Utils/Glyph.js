import React from 'react';

const Glyph = (props) => {
  return (
    <span style={styles.bv} className={props.icon}></span>
  );
};

const styles = {
  bv: {
    position: 'relative',
    top: '2px',
    display: 'inline-block',
    fontFamily: "toolkit-entypo",
    speak: 'none',
    fontSize: '100%',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontVariant: 'normal',
    textTransform: 'none',
    lineHeight: '1',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  }
};

export default Glyph;
