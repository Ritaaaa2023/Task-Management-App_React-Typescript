import { useState } from "react";

/**
 * A lightbulb component which maintains its own "on" or "off" state. A different image will be rendered depending on whether
 * the bulb is currently on or off.
 */

/**
 * Rita: Specified the type of state variable as boolean when using useState<boolean>(false)
 to initialize the state.
 */
const LightBulb: React.FC = () => {
  const [isOn, setOn] = useState<boolean>(false);

  return (
    <img
      src={isOn ? "light-on.png" : "light-off.png"}
      alt={isOn ? "Light is on" : "Light is off"}
      onClick={() => setOn(!isOn)}
    />
  );
};

export default LightBulb;
