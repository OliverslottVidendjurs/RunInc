import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoPath from "../../gfx/runinc_logo.svg";
import HoverLogoPath from "../../gfx/runinc_logo_hover.svg"

function Logo() {
    const [currentImg, setCurrentImg] = useState(LogoPath);

    return (
        <Link to="/">
            <img
                onMouseLeave={() => setCurrentImg(LogoPath)}
                onMouseEnter={() => setCurrentImg(HoverLogoPath)}
                src={currentImg} alt="logo" className="logo" />
        </Link>
    );
}

export default Logo;