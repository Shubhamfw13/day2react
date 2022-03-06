import "./styles.css";
import { Mobile } from "./components/mobile";

const OS = ["Apple", "Blackberry", "Iphone", "Windows Phone"];
const first = "Mobile Operating System";

const company = ["Samsung", "HTC", "Micromax", "Apple"];
const second = "Mbile Manufacturers";

export default function App() {
  return (
    <>
      <Mobile header={first} os={OS} />
      <Mobile header={second} os={company} />
    </>
  );
}
