class Api::V1::SignupsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    render json: { signups: current_user.role }
  end

end
