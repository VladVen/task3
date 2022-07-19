import {connect} from "react-redux";
import SearchResult from "./searchResult";
import {delData} from "../store/searchReducer";


const mapStateToProps = (state) => ({
    universityData: state.search.universityData
})

const SearchResultContainer = connect(mapStateToProps, {delData})(SearchResult)


export default SearchResultContainer