class Api::V1::MatchesController < ApplicationController
  before_action :authenticate_user!

  def index
    @client = Client.order(:id).reverse_order.limit(1)
    level = @client.select(:level)
    advisors = Advisor.where(level: level)
    advisor_id = advisors.select(:user_id)
    users = User.where(id: advisor_id)

    list = []
    advisors.each do |n|
      list.push(n)
    end

    user_list = []
    users.each do |n|
      user_list.push(n)
    end

    @chosen = list.sample(1)
    @user = user_list.sample(1)

    render json: {info: @user}
  end

  def create
  

    Match.create(advisor: @user.first_name)
  end
end
