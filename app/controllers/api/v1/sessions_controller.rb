class Api::V1::SessionsController < ApplicationController
  before_action :authenticate_user!

  def index
      signout = session.clear
    render json: {role: signout}
  end
end
