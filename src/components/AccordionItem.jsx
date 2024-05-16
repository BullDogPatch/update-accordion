import { useState } from 'react';

function AccordionItem({ num, title, curOpen, setCurOpen, children }) {
  const isOpen = num === curOpen;
  const toggleOpen = () => setCurOpen(isOpen ? null : num);
  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={toggleOpen}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="text">{title}</p>
      <p className="icon">{isOpen ? '+' : '-'}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}

export default AccordionItem;
