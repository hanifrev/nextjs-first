import React, { useState } from "react";
import data from "./MOCK_DATA2.json";

const Search2 = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [check, setCheck] = useState(false);

  const upSection = {
    padding: "10px 10px",
    // display: "flex",
    // flexDirection: "column",
    // width: "20rem",
  };

  const container = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  };

  const styles = {
    background: "rgba(255, 254, 255, 0.6)",
    width: "14rem",
    borderRadius: "15px",
    padding: "3px 0 3px 14px",
    // opacity: "90%",
  };

  const prodCategory = [...new Set(data.map((x) => x.category))];
  //   console.log(prodCategory);

  const [product, setProduct] = useState([]);
  const hChange = (e) => {
    const isChecked = e.target.checked;
    console.log(isChecked);

    if (isChecked) {
      setProduct([...product, e.target.value]);
    } else {
      const index = product.indexOf(e.target.value);
      product.splice(index, 1);
      setProduct(product);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    setProduct(product);
  };

  const showCat = product.filter((x) => product).join(", ");

  return (
    <div>
      <div style={upSection}>
        <h3>{showCat}</h3>
        <input onChange={(e) => setSearch(e.target.value)} />
        <br></br>
        <form onSubmit={onSubmit}>
          {prodCategory.map((x) => {
            return (
              <>
                <label>
                  {x}
                  <input
                    className="xyz"
                    value={x}
                    name="product"
                    onChange={hChange}
                    type="checkbox"
                  />
                </label>
                <br></br>
              </>
            );
          })}
          <input type="submit" value="Submit" />
        </form>
        {/* <h3>{product}</h3> */}
        {/* <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option></option>
          {prodCategory.map((x) => {
            return <option>{x}</option>;
          })}
        </select> */}
      </div>
      {/* <h2>{product}</h2> */}
      <div style={container}>
        {data
          .filter((x) => {
            if (product == x.category) {
              return x;
            } else if (x.category == "") {
              return x;
            }
          })
          //   .filter((x) => {
          //     if (category == "") {
          //       return x;
          //     } else if (x.category === category) {
          //       return x;
          //     }
          //   })
          .filter((x) => {
            if (search == "") {
              return x;
            } else if (x.title.toLowerCase().includes(search.toLowerCase())) {
              return x;
            }
          })
          .map((x, key) => {
            return (
              <div key={key} style={styles}>
                <h4>{x.title}</h4>
                <h5>{x.brand}</h5>
                {/* <h6>{x.category}</h6> */}
                <h5>${x.price}</h5>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Search2;
