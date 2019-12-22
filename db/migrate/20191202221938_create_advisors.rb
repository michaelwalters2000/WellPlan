class CreateAdvisors < ActiveRecord::Migration[5.2]
  def change
    create_table :advisors do |t|
      t.integer :experienceYears
      t.integer :clientNumber
      t.integer :avgClientInvestableAssets
      t.integer :totalClientIncome
      t.integer :totalClientsInvestableAssets
      t.integer :mutualFundsETFs
      t.boolean :individualSecurities
      t.integer :totalStocksAndBonds
      t.decimal :clientBusinessowners
      t.boolean :discipinaryAction
      t.text :explination
      t.integer :clientCapacity
      t.integer :clientRating
      t.boolean :certifications
      t.boolean :independent
      t.string :firm

      t.timestamps
    end
  end
end
