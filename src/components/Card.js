import "./Card.css"

function Card(props){
  // 기본적으로 card 속성을 포함하고, props로 작성한 className 추가 적용
  const classes = "card " + props.className;

  return(
    <div className={classes}>{props.children}</div>
  );
}

export default Card;