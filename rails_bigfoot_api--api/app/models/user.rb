class User < ApplicationRecord
    has_many :posts
    has_many :sightings
    has_many :comments
end
