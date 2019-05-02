import * as BeerApiUtil from '../util/beer_api_util';

export const RECEIVE_ALL_BEERS = 'RECEIVE_ALL_BEERS';
export const RECEIVE_BEER = 'RECEIVE_BEER';
export const REMOVE_BEER = 'REMOVE_BEER';
export const RECEIVE_BEER_ERRORS = 'RECEIVE_ERRORS';

const receiveBeers = (beers) => (
    {
        type: RECEIVE_ALL_BEERS,
        beers
    }
);

const receiveBeer = (beer) => (
    {
        type: RECEIVE_BEER,
        beer
    }
);

const removeBeer = (beerId) => (
    {
        type: REMOVE_BEER,
        beerId
    }
);

export const receiveBeerErrors = (errors) => (
    {
        type: RECEIVE_BEER_ERRORS,
        errors
    }
);

export const fetchBeers = () => (dispatch) => (
    BeerApiUtil.fetchBeers()
        .then(beers => dispatch(receiveBeers(beers)), err => (
            dispatch(receiveBeerErrors(err.responseJSON))
        ))
);

export const fetchBeer = (beerId) => (dispatch) => (
    BeerApiUtil.fetchBeer(beerId)
        .then(beer => dispatch(receiveBeer(beer)), err => (
            dispatch(receiveBeerErrors(err.responseJSON))
        ))
);

export const createBeer = (beer) => (dispatch) => (
    BeerApiUtil.createBeer(beer)
        .then(beer => dispatch(receiveBeer(beer)), err => (
            dispatch(receiveBeerErrors(err.responseJSON))
        ))
);

export const updateBeer = (beer) => (dispatch) => (
    BeerApiUtil.updateBeer(beer)
        .then(beer => dispatch(receiveBeer(beer)), err => (
            dispatch(receiveBeerErrors(err.responseJSON))
        ))
);

export const deleteBeer = (beerId) => (dispatch) => (
    BeerApiUtil.deleteBeer(beerId)
        .then(beer => dispatch(removeBeer(beer.id)), err => (
            dispatch(receiveBeerErrors(err.responseJSON))
        ))
);