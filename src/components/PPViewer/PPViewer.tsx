import React from 'react';

interface IPPViewer {
  link: string;
}

const PPViewer: React.FC<IPPViewer> = ({ link }) => {
  return (
    <>
      <iframe
        title="unique"
        style={{
          width: '100%',
          height: '50vh',
        }}
        src={link}
      />
    </>
  );
};

export default PPViewer;
