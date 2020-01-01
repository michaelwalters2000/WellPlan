class Api::V1::MatchesController < ApplicationController
  def index
    render json: Client.where(level:2)
  end

  def create
    render json: Advisor.all
  end
end
