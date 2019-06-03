Rails.application.routes.draw do

  resources :users
  resources :sightings
  resources :posts
  resources :comments

end
