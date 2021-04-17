import React, { useEffect, useState } from "react";
import Link from "next/link";
import ReactDOM from "react-dom";
// import Collapsible from "react-collapsible";
// import Accordion from "../../src/component/Accordion";

const Evo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState();
  const [nation, setNation] = useState();

  useEffect(() => {
    const user1 = {
      name: "Scott Fergie",
      natioality: "Scotland",
      score: 9,
    };

    setName(user1.name);
    setNation(user1.natioality);
  });

  const questionsAnswers = [
    {
      question: "How many team members can I invite?",
      answer:
        "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
    {
      question: "What is the masaximum file upload size?",
      answer:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      question: "How do I reset my password?",
      answer: `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
    },
    {
      question: "Can I cancel my subscription?",
      answer: `Yes! Send us a message and we’ll process your request no questions asked.`,
    },
    {
      question: "Do you provide additional support?",
      answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
    },
  ];

  class Panel extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        height: 0,
      };
    }

    componentDidMount = () => {
      window.setTimeout(() => {
        const el = ReactDOM.findDOMNode(this);
        const height = el.querySelector(".panel__inner").scrollHeight;
        this.setState({
          height,
        });
      }, 333);
    };

    render() {
      const { label, content, activeTab, index, activateTab } = this.props;
      const { height } = this.state;
      const isActive = activeTab === index;
      const innerStyle = {
        height: `${isActive ? height : 0}px`,
      };

      return (
        <div className="panel" role="tabpanel" aria-expanded={isActive}>
          <button className="panel__label" role="tab" onClick={activateTab}>
            {label}
          </button>
          <div
            className="panel__inner"
            style={innerStyle}
            aria-hidden={!isActive}
          >
            <p className="panel__content">{content}</p>
          </div>
        </div>
      );
    }
  }

  class Accordion extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: 0,
      };

      this.activateTab = this.activateTab.bind(this);
    }

    activateTab(index) {
      this.setState((prev) => ({
        activeTab: prev.activeTab === index ? -1 : index,
      }));
    }

    render() {
      const { panels } = this.props;
      const { activeTab } = this.state;
      return (
        <div className="accordion" role="tablist">
          {panels.map((panel, index) => (
            <Panel
              key={index}
              activeTab={activeTab}
              index={index}
              {...panel}
              activateTab={this.activateTab.bind(null, index)}
            />
          ))}
        </div>
      );
    }
  }

  const panels = [
    {
      label: "How many team members can I invite?",
      content:
        "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
    {
      label: "Screen Readers Actually Read That Stuff",
      content:
        'Most assistive devices will read aloud text inserted via CSS, and many of the Unicode characters icon fonts depend on are no exception. Best-case scenario, your "favorite" icon gets read aloud as "black favorite star." Worse-case scenario, it\'s read as "unpronounceable" or skipped entirely.',
    },
    {
      label: "They Fail Poorly and Often",
      content:
        'When your icon font fails, the browser treats it like any other font and replaces it with a fallback. Best-case scenario, you\'ve chosen your fallback characters carefully and something weird-looking but communicative still loads. Worse-case scenario (and far more often), the user sees something completely incongruous, usually the dreaded "missing character" glyph.',
    },
    {
      label: "They're a Nightmare if You're Dyslexic",
      content:
        "Many dyslexic people find it helpful to swap out a website's typeface for something like OpenDyslexic. But icon fonts get replaced as well, which makes for a frustratingly broken experience.",
    },
    {
      label: "There's Already a Better Way",
      content:
        "SVG is awesome for icons! It's a vector image format with optional support for CSS, JavaScript, reusability, accessibility and a bunch more. It was made for this sort of thing.",
    },
  ];

  return (
    <div>
      <h2>js the hard parts v2</h2>
      <p>Number {count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count * 0)}>reset</button>
      <hr />

      <h3>Closure</h3>
      <Link href="/notes/closure">
        <a>Go to closure page</a>
      </Link>
      <hr />

      <h3>Asynchronous</h3>
      <hr />

      <h3>OOP</h3>
      <p>Name: {name}</p>
      <p>Nationality: {nation}</p>

      <form>
        <label>Name:</label>
        <input type="text" />
      </form>
      <div className="acc-container">
        <div>={">"}</div>
        {/* <Accordion questionsAnswers={questionsAnswers} /> */}
      </div>
      <Accordion panels={panels} />
    </div>
  );
};

export default Evo;
