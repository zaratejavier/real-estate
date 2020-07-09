class Api::AgentsController < ApplicationController
  def index
    render json: Agent.unsold_home 

  end
end
