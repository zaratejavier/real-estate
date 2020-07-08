class Api::PropertiesController < ApplicationController
  def index
    render json: Property.available
    # render json: Property.all
  end

  def city
    render json: Property.by_city(params[:city])
    # render json: Property.all
  end
end