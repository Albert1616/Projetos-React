import { useState } from 'react';
import Card, { CardProps } from './Card';
import { resetCardsSort } from './cards_functions/cards_functions';

export interface appProps {
  cards: CardProps[];
}

function App({ cards }: appProps) {
  const [selected, Setselected] = useState<string[]>([]);
  const [click, Setclick] = useState(0);
  const [lst, Setlst] = useState(() => {
    return resetCardsSort(cards);
  });

  const turnCard = (url1: string, url2: string) => {
    const turn = lst.map((card) => {
      if (card.url === url1 || card.url === url2) {
        card.isTurned = false;
      }
      return card;
    })
    Setlst(turn);
  }

  const HandleClick = (id: number) => {
    const check = lst.map((card) => {
      if (card.id !== id || card.isTurned) return card;
      if (card.isTurned === false) {
        if (selected.length < 2) {
          card.isTurned = true;
          Setselected([...selected, card.url]);
        }
        else if (selected.length === 2) {
          if (selected[0] !== selected[1]) {
            turnCard(selected[0], selected[1])
            Setselected([]);
          } else {
            Setselected([]);
          }
        }
      }
      Setclick(click + 1);
      return card;
    })
    Setlst(check);
  };

  return (
    <div style={{
      width: '120vh', height: '80vh',
      padding: '40px', backgroundColor: 'transparent', margin: '0 auto',
      display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr'
      , gridColumnGap: '35px', gridRowGap: '15px'
    }}>
      {lst.map((card) => {
        return <Card {...card} key={Math.random()} handleClick={HandleClick} />
      })}
    </div>
  )
}

export default App
