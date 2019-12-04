class CreateAdvisors < ActiveRecord::Migration[5.2]
  def change
    create_table :advisors do |t|
      t.integer :experience_years
      t.integer :client_number
      t.integer :avg_client_investable_assets
      t.integer :total_client_income
      t.integer :total_clients_investable_assets
      t.integer :mutual_funds_ETFs
      t.boolean :individual_securities
      t.integer :total_stock_and_bonds
      t.decimal :client_business_owners
      t.boolean :discipinary_action
      t.text :explination
      t.integer :client_capacity
      t.integer :client_rating
      t.boolean :CFP
      t.boolean :AIF
      t.boolean :PFS
      t.boolean :CHFC
      t.boolean :NAPFA
      t.boolean :FPA
      t.boolean :independent
      t.string :firm

      t.timestamps
    end
  end
end
