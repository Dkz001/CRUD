export default function Fruit({ fruitInfo, onClick }) {
  // state
  // const fruitInfo = props.fruitInfo;
  // const onFruitDelete = props.onFruitDelete;

  // comportements

  // affichage (render)
  return (
    <li>
      {fruitInfo.nom} <button onClick={onClick}>X</button>
    </li>
  );
}
