import logo from "./logo192.png";

export default function Header() {
  const now = new Date();

  return (
    <header>
      <div>
        <img src={logo} style={{ width: "25px", height: "25px" }} alt="Logo" />
        <h1>My first app </h1>
        <span>Today now is {now.toLocaleDateString()}</span>
      </div>
      {/*<h5>gggggg</h5>*/}
    </header>
  );
}
