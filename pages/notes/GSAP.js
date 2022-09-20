import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import dynamic from "next/dynamic";
import Link from "next/link";

// const ScrollTrigger = dynamic(() => import("gsap/ScrollTrigger"), {
//   ssr: false,
// });

const GSAP = () => {
  gsap.registerPlugin(ScrollTrigger);
  const boxRef = useRef();

  //   useEffect(() => {
  //     gsap.to(boxRef.current, { rotation: "+=360" });
  //   });

  const q = gsap.utils.selector(boxRef);

  useEffect(() => {
    let test1 = document.querySelector(".test1");
    let test2 = document.querySelector(".test2");
    gsap.to(q(".box"), { x: 100 });
    gsap.from(q(".fromTest"), { x: 140, y: 100, duration: 2 });
    gsap.fromTo(q(".fromToTest"), { x: 100 }, { x: 250 });
    gsap.from([(test1, test2)], { x: 200, duration: 4 });
    gsap.to(q(".moveBox"), {
      duration: 2,
      x: 200,
      rotation: 360,
    });
    gsap.to(q(".scrl"), {
      scrollTrigger: {
        id: 1,
        trigger: ".scrl",
        start: "top bottom",
        toggleActions: "play none none reverse",
      },
      stagger: 0.3,
      x: 200,
      duration: 2,
    });
    gsap.from(q(".yntkts"), {
      scrollTrigger: {
        id: 1,
        trigger: ".yntkts",
        start: "top bottom",
        toggleActions: "play none none reverse",
      },
      y: 200,
      duration: 2,
    });
  }, []);

  const titles = {
    height: "5rem",
  };

  const container = {
    overflow: "hidden",
  };

  const movingBox = {
    display: "flex",
    width: "100px",
    height: "100px",
    border: "1px solid",
    background: "yellowgreen",
  };

  return (
    <div ref={boxRef} style={container}>
      <div>
        <Link href="/notes">
          <h3 style={{ cursor: "pointer", width: "90px" }}>{"<- "}BACK</h3>
        </Link>
      </div>
      <div className="box">Aufbruch</div>
      <div className="box">
        <p>
          Ich weiß nicht, warum ich das tue. Es ist fast ein innerer Zwang, der
          mich dazu treibt. Vielleicht führte ich wenn ich anders könnte, würde
          ich langsam aufhören ein Mensch zu sein, und würde bald schmutzig und
          stinkend umhier kriechen und unverständliche Laute aufstoßen. Nicht,
          dass ich führtete ein Tier zu werden. Das wäre nicht sehr schlimm.
          Aber ein Mensch kann niemals ein Tier werden. Er stützt ein Tier vor
          über in einem abkommt.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <p>
          Bei Eiseskälte hinaus in diese Welt Eine Gestalt nur, die durch die
          Wildnis taumelt Die See liegt neben mir All der Frust und alle Wut in
          sich gestaut Der Weg wird steiler und in meinem Nacken brennen ihre
          Feuer Doch mein Gang führt geradeaus Die Einsamkeit gibt mir Kraft
          Durch diese Nacht mich zu schlagen Vor der Kälte stets gewehrt Ist sie
          nun mein Freund Ungewiss wie weit die erfror'nen Füße mich noch tragen
          Jetzt aber wärmt mich ein ferner Traum von Hoffnung und Glück Das
          Licht des klaren Nachthimmels durchbricht das Geäst Der Pfad
          erleuchtet, doch verharrt in dunklen Gedanken Bei Eiseskälte führe ich
          fort meinen Schritt Das Licht im Nacken nunmehr ein schwaches Leuchten
          Kehre ich wieder Werde ich einer von ihnen sein Sehe all ihre
          Gesichter, ihre Züge niemals gleich Doch eines haben sie gemeinsam,
          der Blick so starr wie Eis Was sollen wir sehen, wenn um uns herum nur
          Dunkel ist Wo sind die Träume, so schreit' ich voran in die Kälte
        </p>
      </div>
      <div className="moveBox" style={movingBox}></div>
      <div className="fromTest">
        <h1>Blackwater Park</h1>
      </div>
      <div className="fromToTest">
        <h1>The Leper Affinity</h1>
      </div>
      <div className="test1">
        <h1>Dirge For November</h1>
        <p style={{ width: "500px", color: "white" }}>
          The omen showed, took me away Preparations are done, this can't last
          The mere reflection brought disgust No ordeal to conquer, this firm
          slit It sheds upon the floor, dripping into a pool Grant me sleep,
          take me under Like the wings of a dove, folding around I fade into
          this tender care
        </p>
      </div>
      <div className="test2">
        <h1>Pattern in The Ivy</h1>
        <p>
          One moonlit shadow on the wall Disrupted in its own creation Veiled in
          the darkness of this fall Is this the end - manifestation
        </p>
      </div>
      <div className="scrl" style={titles}>
        <h1>As The Palaces Burn</h1>
      </div>
      <div className="scrl" style={titles}>
        <h1>Blacken The Cursed Sun</h1>
      </div>
      <div className="scrl">
        <h1>Hjärtat vet vad handen gör</h1>
        <p style={{ width: "500px", color: "white" }}>
          Krig i en utopi Döda den som slår sig fri från symmetri Parodin blev
          allvar Och vi köper tid Folket tappar mark men vi älskar monarkin
          Döden är en saga i ett land köpt på kredit Vågen svart som silver
          tyngd av jakten på dopamin
        </p>
      </div>
      <div className="yntkts">
        <h1>Reign in Blood</h1>
        <p style={{ width: "500px", color: "white" }}>
          Sadistic, surgeon of demise Sadist of the noblest blood Destroying
          without mercy To benefit the Aryan race, Surgery with no anesthesia
          Feel the knife pierce you intensely Inferior, no use to mankind
          Strapped down, screaming out to die
        </p>
      </div>
      <div>
        <h1>Vergängnis</h1>
        <p style={{ width: "500px", color: "white" }}>
          Er verlässt das Meer aus Wehmut Angstvoll richtet sich sein Blick gen
          Himmel Leer blickt auf ihn die Welt Ein tiefes Raunen durchfährt den
          Ort An dem er so lange Jahre ausgeharrt Dies ist ein Abschied für
          immer Die Vernunft begraben für immer
        </p>
      </div>
    </div>
  );
};

export default GSAP;
