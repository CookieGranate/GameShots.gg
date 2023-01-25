import '../scripts/searchbar';
import searchbargames from '../json/search/games.json';
import searchbarcategory from '../json/search/category.json';
import { useState } from 'react';


const Searchbar = () => {
    const resultsdiv = document.getElementById('resultsdiv');
    const searchbar = document.getElementById('searchbar');
    
    return (
        <div id="searchbardiv" onLoad={() => document.getElementById('resultsdiv').style.display = 'none'}>
            <input type="text" placeholder="Search for a game.." name="search" id='searchbar' />
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