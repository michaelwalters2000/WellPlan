class Api::V1::AdvisorsclientsController < ApplicationController
  before_action :authenticate_user!

  def index
    match = Match.where(a_user_id: current_user.id).limit(1)
    client_user_id = match.select(:c_user_id)
    client = User.where(id: client_user_id)
    render json: { client: client }
  end

  def after_sign_up_path_for(resource)
   redirect_to choose_path
 end
end
