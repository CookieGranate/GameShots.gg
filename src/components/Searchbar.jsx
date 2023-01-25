import '../scripts/searchbar';
import searchbargames from '../json/search/games.json';
import searchbarcategory from '../json/search/category.json'

const Searchbar = () => {
    var resultsdiv = document.getElementById('resultsdiv')
    var searchbar = document.getElementById('searchbar')
    var searchbardiv = document.getElementById('searchbardiv')
    var searchbarbox = document.getElementById('searchbarbox')

    return (
        <div id="searchbardiv">
            <div id='searchbarbox' onFocus={showResults}>
                <input type="text" placeholder="Search for a game.." name="search" id='searchbar' />
            </div>
            
            <button type="submit"><i class="fa fa-search"></i></button>
            <div id="resultsdiv">
                <h4>Games</h4>
                {searchbargames && searchbargames.map(({ gamename, id }) => (
                    <div key={id} className="gamename result">
                        <strong>{gamename}</strong>
                    </div>
                ))}
                <div id="categories">
                    {searchbarcategory && searchbarcategory.map(({ category, id }) => (
                        <div key={id} className="category">
                            <strong>{category}</strong>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Searchbar