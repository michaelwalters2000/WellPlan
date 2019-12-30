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
      :level,
      :score,
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
      :moreThan10PercentAnnuitiesOrEmployerPensions,
      :clientCapacity,
      :clientRating,
      :certifications,
      :independent,
      :firm
    )
  end
end
