class Api::V1::SignupsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    id = current_user.id
    signups = current_user.id
    render json: { signups: signups }
  end

end
