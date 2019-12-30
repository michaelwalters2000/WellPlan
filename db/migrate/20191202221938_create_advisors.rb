class CreateAdvisors < ActiveRecord::Migration[5.2]
  def change
    create_table :advisors do |t|
      t.string :experienceYears
      t.string :clientNumber
      t.string :avgClientInvestableAssets
      t.string :totalClientIncome
      t.string :totalClientsInvestableAssets
      t.boolean :mutualFundsETFs
      t.boolean :individualSecurities
      t.string :totalStocksAndBonds
      t.string :clientBusinessOwners
      t.boolean :discipinaryAction
      t.text :explanation
      t.integer :clientCapacity
      t.integer :clientRating
      t.string :certifications
      t.boolean :independent
      t.string :firm
      t.integer :level
      t.integer :irrelevant

      t.timestamps
    end
  end
end
