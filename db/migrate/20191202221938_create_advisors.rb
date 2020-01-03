class CreateAdvisors < ActiveRecord::Migration[5.2]
  def change
    create_table :advisors do |t|
      t.integer :level
      t.integer :score
      t.string :experienceYears
      t.string :clientNumber
      t.string :avgClientInvestableAssets
      t.string :totalClientIncome
      t.string :totalClientsInvestableAssets
      t.boolean :mutualFundsETFs
      t.boolean :individualSecurities
      t.boolean :stocksAndBonds
      t.string :totalStocksAndBonds
      t.string :clientBusinessOwners
      t.boolean :discipinaryAction
      t.text :explanation
      t.boolean :moreThan10PercentAnnuitiesOrEmployerPensions
      t.integer :clientCapacity
      t.integer :clientRating
      t.string :certifications
      t.boolean :independent
      t.string :firm
      t.belongs_to :user

      t.timestamps
    end
  end
end
