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
      :kids0to5,
      :kids6to12,
      :kids13to18,
      :homeowner,
      :equity,
      :morethan1home,
      :businessowner,
      :income,
      :spousesincome,
      :retirement,
      :retirementamount,
      :stocksbonds,
      :stocksbondsamount,
      :pension
    )
  end
end
