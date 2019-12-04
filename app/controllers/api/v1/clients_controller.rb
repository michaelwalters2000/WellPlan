class Api::V1::ClientsController < ApplicationController
  def create
  new_client = Client.new(client_params)

  if new_review.save
    render json: { client: new_client }
  else
    render json: {status: "error"}
  end
end

  def index
    render json: Client.all
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
      :number_of_homes,
      :business_owner,
      :income,
      :four_o_one_k,
      :stocks_and_bonds,
      :pension
    )
  end
end
