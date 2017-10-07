Rails.application.routes.draw do
  devise_for :users
  resource :beauty, only[:index]
  root "top#index"
  get 'top/index'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
