Rails.application.routes.draw do
 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    get 'properties', to: 'properties#index'
    get "cities/:city", to: "properties#city"

    # get "dcities/:dcity", to: "properties#dcity"
    resources :agents, only: [:index, :show]
    # get 'agents', to 'agents#index'
  end
end
