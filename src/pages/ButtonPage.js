import { GoBell, GoBug, GoPasskeyFill } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary outline className="my-5">
          <GoBell />
          Click Me
        </Button>
      </div>
      <div>
        <Button secondary rounded outline>
          <GoBug />
          Hide ads
        </Button>
      </div>
      <div>
        <Button success outline>
          <GoPasskeyFill />
          Buy Now
        </Button>
      </div>
      <div>
        <Button warning rounded>
          See deal
        </Button>
      </div>
      <div>
        <Button danger>See deal</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
