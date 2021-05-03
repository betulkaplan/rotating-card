import React from 'react';
import style from '../style.module.css';

const links = [
  {
    link:
      'https://images.unsplash.com/photo-1572590285030-0ae6a4715671?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    link:
      'https://images.unsplash.com/photo-1556582305-528bffcf7af0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    link:
      'https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    link:
      'https://images.unsplash.com/photo-1533738699159-d0c68059bb61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    link:
      'https://images.unsplash.com/photo-1545249390-6bdfa286032f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    link:
      'https://images.unsplash.com/photo-1547955922-85912e223015?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
];

export default function Card() {
  const [hover, setHover] = React.useState(0);
  const [viewMore, setViewMore] = React.useState(0);

  const cardHover = () => {
    setHover(1);
  };

  const cardHoverRes = () => {
    setHover(0);
    setViewMore(0);
    //setViewMore(0);
  };

  const clickViewMore = () => {
    setViewMore(1);
    //setHover(0);
  };

  const arr = links.map((item) => (
    <div>
      <img className={style.displayCat} src={item.link} alt="" />
    </div>
  ));

  return (
    <div
      className={`${style.card} ${hover ? style.hover : null}`}
      onMouseEnter={cardHover}
      onMouseLeave={cardHoverRes}
    >
      {!viewMore ? (
        <div>
          <div className={style.top}>
            <img
              className={style.topImg}
              src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className={`${style.textPart} ${hover ? style.hover : null}`}>
            <br />
            <h2>Blonde Cats</h2>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              aspernatur voluptatem ex iure alias temporibus totam et. Hic,
              ducimus necessitatibus.
            </p>
          </div>
          <div className={style.bottom}>
            <a href="#" onClick={setViewMore}>
              View More
            </a>
          </div>
        </div>
      ) : (
        <div className={style.catsDisplay}>{arr}</div>
      )}
    </div>
  );
}
