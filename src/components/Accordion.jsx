import { useState } from 'react';
import AccordionItem from './AccordionItem';

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((faq, i) => (
        <AccordionItem
          key={i}
          title={faq.title}
          text={faq.text}
          num={i}
          curOpen={curOpen}
          setCurOpen={setCurOpen}
        />
      ))}
    </div>
  );
}

export default Accordion;
