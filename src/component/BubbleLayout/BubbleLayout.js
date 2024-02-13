import React from 'react';
import './BubbleLayout.css'

const Bubble = () => {
  return <div className="bubble"></div>;
};

const BubbleLayout = () => {
  return (
    <section className="sticky">
      <div className="bubbles">
        {[...Array(10)].map((_, index) => (
          <Bubble key={index} />
        ))}
      </div>
    </section>
  );
};

export default BubbleLayout;
