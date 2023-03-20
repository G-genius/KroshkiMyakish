import React, {useState} from "react";
import { Input } from "antd";

const { Search } = Input

const  SearchFeature = (props) => {

    const [SearchTerms, setSearchTerms] = useState("")
    const onChangeSearch = (event) => {
        setSearchTerms(event.currentTarget.value)

        props.refreshFunction(event.currentTarget.value)
    }
    return (
        <div className="search_feature">
            <Search
                value={"sada"}
                onChange={onChangeSearch}
                placeholder="Поиск . . ."
            />
        </div>

    )
}
export default SearchFeature