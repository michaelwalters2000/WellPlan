class Api::V1::MatchesController < ApplicationController
  before_action :authenticate_user!

  def index
    client = Client.order(:id).reverse_order.limit(1)
    level = client.select(:level)
    advisors = Advisor.where(level: level)
    advisor_id = advisors.select(:user_id)
    users = User.where(id: advisor_id)

    user_list = []
    users.each do |n|
      user_list.push(n)
    end

    user = user_list.sample(1)

    user.map { |user|
      @advisor_user_id = user.id
      @af_name = user.first_name
      @al_name = user.last_name
     }

    a_name = @af_name + " " + @al_name
    c_name = current_user.first_name + " " + current_user.last_name

    Match.create({c_user_id: current_user.id, a_user_id: @advisor_user_id, advisor_name: a_name, client_name: c_name})
    chosen_client = Client.where(user_id: current_user.id)
    chosen_advisor = User.where(id: @advisor_user_id)
    current_user.update(role:"Client")
    chosen_advisor.update(role:"Advisor")
    render json: {info: user}
  end
end
