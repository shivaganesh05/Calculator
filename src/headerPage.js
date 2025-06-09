import React from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import logo from "./imges/Seven83_white_logo.svg";
import { CircleUser } from "lucide-react";
const HeaderPage = () => {
  const popoverBottom = (
    <Popover id="popover-positioned-bottom" title="Popover bottom">
      <span className="btn profile-text pt-2">Profile </span>
      <br></br> <span className="btn profile-text  pt-2">Logout </span>
    </Popover>
  );
  return (
    <div className="header d-flex">
      <div class="p-2 w-100">
        <div className="">
          <img src={logo} alt="Seven83 Logo" className="header-logo" />
        </div>
      </div>
      <div class="p-2 flex-shrink-1">
        <OverlayTrigger
          trigger="click"
          placement="bottom"
          overlay={popoverBottom}
        >
          <span className="btn text-white pt-2 me-4">
            <CircleUser size={33} />
          </span>
        </OverlayTrigger>
      </div>
    </div>
  );
};

export default HeaderPage;
