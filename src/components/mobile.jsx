export function Mobile(props) {
  return (
    <>
      <h1>{props.header}</h1>
      {props.os.map((e) => (
        <li>{e}</li>
      ))}
    </>
  );
}
