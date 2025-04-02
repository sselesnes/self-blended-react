// export default function Product(props) {
//   const randomPrice = (Math.random() * 100).toFixed(2);
//   const randomImg = `https://picsum.photos/320/200?random=${Math.floor(randomPrice)}`;
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <img src={randomImg} alt={props.alt} width="320" />
//       <p>Price: {randomPrice} credits</p>
//     </div>
//   );
// }

// https://react.dev/learn/passing-props-to-a-component

export default function Product({ name, alt = "default alt text" }) {
  const randomPrice = (Math.random() * 100).toFixed(2);
  const randomImg = `https://picsum.photos/320/200?random=${Math.floor(randomPrice)}`;
  return (
    <div>
      <h2>{name}</h2>
      <img src={randomImg} alt={alt} width="320" />
      <p>{alt}</p>
      <p>Price: {randomPrice} credits</p>
    </div>
  );
}
