const Draw = (props) => {
    const drawHandler = () => {
        props.onDraw.setSelectedCard('Card Selected')
        props.onDraw.setDisplay('card')
  }

  return (
    <>
      <p>Draw</p>
      <button onClick={drawHandler}>Draw Your Card</button>
    </>
  );
}

export default Draw;