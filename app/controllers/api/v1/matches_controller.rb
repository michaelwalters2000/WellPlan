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
  #   match = Match.new(match_params.merge(c_user_id: current_user.id))
  # def as_json(options = {})
  # super(options.merge(include: :user))
  # end
  #
  #   private
  #   def match_params
  #     params.require(:match).permit(
  #       :advisor,
  #       :client,
  #       :a_user_id,
  #       :c_user_id,
  #       :advisor_name,
  #       :client_name
  #     )
    end
  end
