import React from 'react';
import { Link } from 'react-router-dom';
import BeerExtraDetail from '../beer_extra_detail';
import BeerIcon from '../beer_icon';
import BeerDesc from '../beer_desc';

const BeerIndexItem = (props) => {
    if (props.brewery !== undefined) {
        return(
            <li className="beer-index-item">
                <BeerIcon beerPhotoUrl={props.beer.beerPhotoUrl} src="beer-show" />
                <div className="beer-details">
                    <Link className="beer-title" to={`/beers/${props.beer.id}`}>
                        {props.beer.name}
                    </Link>
                
                    <p className="beer-brewery">{props.brewery.name}</p>
                    <p className="beer-type">{props.beer.beerType}</p>
                    <BeerDesc fullDesc={props.beer.description} charCount={150} classDesc="beer-show-desc-index"/>
                </div>
                <BeerExtraDetail beer={props.beer} />
            </li>
        )
    } else {
        return null;
    }
    
};

export default BeerIndexItem;