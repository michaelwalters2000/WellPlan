class Api::V1::SignupsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    user = User.order(:id).reverse_order.limit(1)
    userid = user.select(:id)
    id = current_user.id
    if userid == id
      signups = id
    else
      signups = 0
    end
    render json: { signups: signups }
  end

end
