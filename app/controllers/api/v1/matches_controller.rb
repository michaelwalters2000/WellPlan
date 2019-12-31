class Api::V1::MatchesController < ApplicationController
  def index
    render json: Advisor.where(score:28)
  end

  def create
    render json: Advisor.all
  end
end
