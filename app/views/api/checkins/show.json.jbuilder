json.checkin do
    json.partial! 'checkin', checkin: @checkin
end

json.user do
    json.extract! @checkin.user, :id, :username, :first_name, :last_name
end

json.beer do
    json.extract! @checkin.beer, :id, :brewery_id, :description, :beer_type, :abv, :name
    json.createdAt @checkin.beer.created_at.strftime("%m/%d/%Y")
    if @checkin.beer.photo.attached?
        json.beerPhotoUrl url_for(@checkin.beer.photo)
    else
        json.beerPhotoUrl ""
    end
end

json.brewery do
    json.extract! @checkin.brewery, :id, :name
end

#check efficiency of this
