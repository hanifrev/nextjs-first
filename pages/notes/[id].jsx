import React from "react";
import { useRouter } from "next/router";
import ReactDOM from "react-dom";
// import { useRouter } from "next/dist/next-server/server/router";

const Page = () => {
  const Router = useRouter();
  const { id } = Router.query;

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
      label: "historical_balance",
      content:
        "Description of historical_balance. Bortom trygghet göms begär När månen slickar sin atmosfär",
    },
    {
      label: "owner",
      content:
        "Description of owner. Bortom trygghet göms begär När månen slickar sin atmosfär",
    },
    {
      label: "transaction",
      content:
        "Description of transaction. Bortom trygghet göms begär När månen slickar sin atmosfär",
    },
    {
      label: "account_type",
      content:
        "Description of account_type. Bortom trygghet göms begär När månen slickar sin atmosfär",
    },
  ];

  return (
    <div>
      <div>i will endure hide away</div>
      <div>the id : {id} </div>
      <Accordion panels={panels} />
    </div>
  );
};

export default Page;
