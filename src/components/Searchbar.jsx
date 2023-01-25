
import searchbargames from '../json/search/games.json';
import searchbarcategory from '../json/search/category.json';

const Searchbar = () => {
    const resultsdiv = document.getElementById('resultsdiv');
    const searchbar = document.getElementById('searchbar');
    
    //toggle the searchbar proposal
    function gamesShow(){
        document.getElementById("resultsdiv").style.display = "block";
    }
    function gamesHide(){
        document.getElementById("resultsdiv").style.display = "none";
    }

    return (
        <div id="searchbardiv">
            <input type="text" placeholder="Search for a game.." name="search" id='searchbar' autoComplete='off' onFocus={gamesShow} onBlur={gamesHide} />
            <button type="submit"><i class="fa fa-search"></i></button>
            <div id="resultsdiv">
                <div id='resultscontainer'>
                    <div id="games" className='resultcontainer'>
                        <h4>Games</h4>
                        {searchbargames && searchbargames.map(({ gamename, id }) => (
                            <div key={id} className="gamename result">
                                <strong>{gamename}</strong>
                            </div>
                        ))}
                    </div>

                    <div className="emptydiv"></div>
                    
                    <div id="categories" className='resultcontainer'>
                        {searchbarcategory && searchbarcategory.map(({ category, id }) => (
                            <div key={id} className="category">
                                <strong>{category}</strong>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        
    )
}


export default Searchbar