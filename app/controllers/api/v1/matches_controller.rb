class Api::V1::MatchesController < ApplicationController
  def index
    client = Client.order(:id).reverse_order.limit(1)
    level = client.select(:level)
    render json: Advisor.where(level: level)
  end

  def create
    render json: Advisor.all
  end
end
