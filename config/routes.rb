Rails.application.routes.draw do
  root 'homes#index'
  get 'clients', to: 'homes#index'
  get 'advisors', to: 'homes#index'
  get 'matches', to: 'homes#index'
  get 'viewclients', to: 'homes#index'
  get 'viewadvisor', to: 'homes#index'
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :clients, only: [:index, :create]
      resources :advisors, only: [:index, :create]
      resources :matches, only: [:index, :create]
    end
  end
end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
