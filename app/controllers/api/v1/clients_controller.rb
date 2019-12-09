class Api::V1::ClientsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    render json: { clients: Client.all }
  end

  def create
      client = Client.new(client_params)
      if client.save
        render json: {}
      else
        render json: {status: "error"}
      end
    end

private

  def client_params
    params.require(:client).permit(
      :age,
      :spouse,
      :kids,
      :kids_0to5,
      :kids_6to12,
      :kids_13to18,
      :home_owner,
      :home_equity,
      :morethan1home,
      :business_owner,
      :income,
      :spouses_income,
      :four_o_onek,
      :four_o_onek_amount,
      :stocks_and_bonds,
      :stocks_and_bonds_amount,
      :pension
    )
  end
end
