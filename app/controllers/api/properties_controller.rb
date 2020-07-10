class Api::PropertiesController < ApplicationController
  before_action :set_page

  def index
    # render json: Property.available
    # render json: Property.all
    render json: {properties: Property.page(@page).available,
       total_pages: Property.page(@page).total_pages }
  end

  def city
    render json: Property.by_city(params[:city])
    # render json: Property.all
  end

   def distinct_cities
    render json: Address.distinct_city
    # render json: Property.all
  end

    def cost_by_city
   render json: Property.city_cost
  end



  private

  def set_page
    @page = params[:page] || 1
    
  end


end