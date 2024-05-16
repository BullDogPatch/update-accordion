import { useState } from 'react';
import AccordionItem from './AccordionItem';

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(1);

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
