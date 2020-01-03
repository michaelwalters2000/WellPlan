class Api::V1::MatchesController < ApplicationController
  def index
    client = Client.order(:id).reverse_order.limit(1)
    level = client.select(:level)
    advisor = Advisor.where(level: level)
    advisor_id = advisor.select(:user_id)
    user = User.where(id: advisor_id)
    info = user.select(:first_name, :email)
    render json: {advisor: advisor, info: info}
  end

  def create
    render json: Advisor.all
  end
end
