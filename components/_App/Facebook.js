import { useEffect } from "react";
import { init, cleanup } from "./fb";

const Facebook = () => {
  useEffect(() => {
    init();

    return () => {
      cleanup();
    };
  }, []);

  return (
    <div>
      <div id="fb-root"></div>

      <div id="fb-customer-chat" className="fb-customerchat"></div>
    </div>
  );
};

export default Facebook;
