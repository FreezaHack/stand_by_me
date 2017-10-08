Rails.application.routes.draw do
  devise_for :users
  root "top#index"
  # resource :beauties, only: %i(show), param: :id
  get 'beauties/index' => 'beauties#index', as: 'beauties_index'
  get 'beauties/:id' => 'beauties#show', as: 'beauties'
  get 'time_set' => 'beauties#time', as: 'wake_up_set'
  post 'time_set' => 'beauties#time_set', as: 'wake_up_create'
  get 'beauties/:id/morning' => 'beauties#morning', as: 'wake_up_morning'
  get 'beauties/:id/good' => 'beauties#good', as: 'morning_good'
  get 'beauties/:id/bad' => 'beauties#bad', as: 'morning_bad'
  get 'top/index'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
