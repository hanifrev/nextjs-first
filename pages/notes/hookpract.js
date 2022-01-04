import { useEffect, useState } from "react";
import List from "../../src/component/listing";
import Search from "../../src/component/searching";
import Country from "../../src/country.json"
import Pane from "../../src/component/Pane";
import NavExam from "../../src/component/NavExam";
import Foobar from "../../src/component/navtest/Foobar";
import Effct from "../../src/component/effct";

const Hookpract = () => {

    const style = { color: "#ffffff" }

    const [searchTerm, setSearchTerm] = useState(
        'country'
      );

    const [click, setClick] = useState(false)

    useEffect(() => {
        localStorage.setItem('search', searchTerm);
    })

    const handleSearch = event => {
        setSearchTerm(event.target.value)
    }

    const searchedCountry = Country.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()))

    const test = () => (alert("test click"))

    return (
        <div>
            <Foobar />
            asdzxcqwe
            <NavExam />
            <Search search={searchTerm} onSeacrh={handleSearch} />
            <List list={searchedCountry} />

            <div onClick={()=>test()}>
                {/* <button onClick={()=>test()}>test</button> */}
                abc
            </div>

            <Pane />
            <Effct />
        </div>
    )
}

export default Hookpract;