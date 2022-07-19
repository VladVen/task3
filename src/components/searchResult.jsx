import ResultTemplate from "./resultTemplate";


const SearchResult = (props) => {
    return(
        <div>
            {
                props.universityData
                    ? <div>
                    <div>
                        <button onClick={props.delData}> Clear Results</button>
                    </div>
                        {
                            props.universityData.map((data, index )=> <ResultTemplate key={data.id}
                                                                             name={data.name}
                                                                             country={data.country}
                                                                             domain={data.web_pages}
                                                                                      index={index}/>)
                        }
                    </div>
                    :null
            }
        </div>
    )
}

export default SearchResult