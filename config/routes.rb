Rails.application.routes.draw do
 
      namespace :api do
        resources :departments do
         resources :items, only: [:index, :create]
       end
      end
end
