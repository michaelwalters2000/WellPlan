class Api::V1::AdvisorsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    render json: { advisors: Advisor.all }
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
      :experienceYears,
      :clientNumber,
      :avgClientInvestableAssets,
      :totalClientIncome,
      :totalClientsInvestableAssets,
      :mutualFundsETFs,
      :individualSecurities,
      :totalStocksAndBonds,
      :clientBusinessOwners,
      :discipinaryAction,
      :explanation,
      :clientCapacity,
      :clientRating,
      :certifications,
      :independent,
      :firm,
      :level,
      :irrelevant
    )
  end
end
