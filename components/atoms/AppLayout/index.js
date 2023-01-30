import React, { useEffect, useState } from "react";
import styles, { globalStyles } from "./styles";

export default function AppLayout({ children }) {
  const [bottomBarHeight, setBottomBarHeight] = useState(0);

  useEffect(() => {
    function detectBottomBar() {
      return window.innerHeight < document.documentElement.clientHeight;
    }

    function getBottomBarHeight() {
      return detectBottomBar()
        ? window.innerHeight - document.documentElement.clientHeight
        : 0;
    }

    setBottomBarHeight(getBottomBarHeight());
    window.addEventListener("resize", () =>
      setBottomBarHeight(getBottomBarHeight())
    );
    return () =>
      window.removeEventListener("resize", () =>
        setBottomBarHeight(getBottomBarHeight())
      );
  }, []);

  return (
    <>
      <div>
        <main>{children}</main>
      </div>
      <style jsx>{styles}</style>
      <style jsx>
        {`
          div {
            height: calc(100vh - ${bottomBarHeight}px);
          }
        `}
      </style>
      <style jsx global>
        {globalStyles}
      </style>
    </>
  );
}
