import { mass } from "./data";

function Row(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
    </tr>
  );
}

export default function Table() {
  return (
    <table>
      {mass.map((i) => (
        <Row id={i.id} name={i.name} />
      ))}
      <Row {...mass[0]}></Row>
    </table>
  );
}
