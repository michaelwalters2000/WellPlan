class Api::V1::AdvisorsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    render json: { clients: Advisor.all }
  end

  def create
      advisor = Advisor.new(advisor_params)
      if advisor.save
        render json: {}
      else
        render json: {status: "error"}
      end
    end

private

  def advisor_params
    params.require(:advisor).permit(
      :experience_years,
      :client_number,
      :avg_client_investable_assets,
      :total_client_income,
      :total_clients_investable_assets,
      :mutual_funds_ETFs,
      :individual_securities,
      :total_stock_and_bonds,
      :client_businessowners,
      :discipinary_action,
      :explination,
      :client_capacity,
      :client_rating,
      :CFP,
      :AIF,
      :PFS,
      :CHFC,
      :NAPFA,
      :FPA,
      :independent,
      :firm
    )
  end
end
