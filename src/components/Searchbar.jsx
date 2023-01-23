import '../scripts/searchbar';
import games from '../../public/games.json';

const Searchbar = () => {
    return (
        <div id="searchbardiv">
            <input type="text" placeholder="Search for a game.." name="search" id='searchbar' data-search />
            <button type="submit"><i class="fa fa-search"></i></button>
            <div id="resultsdiv">
                <h4>Games</h4>
                {games && games.map(({ gamename, id }) => (
                    <div key={id} className="gamename result">
                        <strong>{gamename}</strong>
                    </div>
                ))}
                <div id="categories">
                    {games && games.map(({ category, categoryid }) => (
                        <div key={categoryid} className="category">
                            <strong>{category}</strong>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Searchbar