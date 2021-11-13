import { useEffect, useState } from "react";
import List from "../../src/component/listing";
import Search from "../../src/component/searching";
import Country from "../../src/country.json"

const Hookpract = () => {

    const [searchTerm, setSearchTerm] = useState(
        'country'
      );

    useEffect(() => {
        localStorage.setItem('search', searchTerm);
    })

    const handleSearch = event => {
        setSearchTerm(event.target.value)
    }

    const searchedCountry = Country.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()))

    return (
        <div>
            asdzxcqwe
            <Search search={searchTerm} onSeacrh={handleSearch} />
            <List list={searchedCountry} />
        </div>
    )
}

export default Hookpract;