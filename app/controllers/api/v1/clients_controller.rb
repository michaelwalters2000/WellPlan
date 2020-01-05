class Api::V1::ClientsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    matches = Match.where(a_user_id: current_user.id)
    client_user_id = matches.select(:c_user_id)
    clients = User.where(id: client_user_id, role:"Client")
    render json: {clients: clients}
  end

  def create
      client = Client.new(client_params.merge(user_id: current_user.id))
      def as_json(options = {})
        super(options.merge(include: :user))
      end
      if client.save
        current_user.update({role: "Client"})
        render json: {}
      else
        render json: {status: "error"}
      end
    end

private

  def client_params
    params.require(:client).permit(
      :level,
      :score,
      :age,
      :spouse,
      :kids,
      :kidsNumber,
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
