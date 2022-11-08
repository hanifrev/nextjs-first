import React, { useState } from "react";
import TabsA from "../../src/component/TabsA";
import TabsB from "../../src/component/TabsB";

const NewTabs = () => {
  const [activeTabs, setActiveTabs] = useState("tabs1");
  const [defaultSt, setDefaultSt] = useState();

  return (
    <div>
      <div>
        qwerty
        <img
          style={{ width: "30%" }}
          src="https://upload.wikimedia.org/wikipedia/commons/c/cd/HolkerStreet.png"
        />
      </div>
      <div>
        <div onClick={() => setActiveTabs("tabs1")}>Tabs A</div>
        <div onClick={() => setActiveTabs("tabs2")}>Tabs B</div>
      </div>

      <div>{activeTabs === "tabs1" ? <TabsA /> : <TabsB />}</div>
    </div>
  );
};

export default NewTabs;
