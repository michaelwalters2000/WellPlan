class Api::V1::AdvisorsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    match = Match.where(c_user_id: current_user.id).limit(1)
    advisor_user_id = match.select(:a_user_id)
    advisors = User.where(id: advisor_user_id)
    render json: { advisors: advisors }
  end

  def create
      advisor = Advisor.new(advisor_params.merge(user_id: current_user.id))
  def as_json(options = {})
    super(options.merge(include: :user))
  end

      if advisor.save
        User.update(role: "Advisor")
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
      :avgClientIncomePercentUnder200,
      :avgClientIncomePercent200to500,
      :avgClientIncomePercent500to1000,
      :avgClientIncomePercentOver1000,
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
      :firm,
      :user_id
    )
  end
end
