class CreateClients < ActiveRecord::Migration[5.2]
  def change
    create_table :clients do |t|
      t.integer :age
      t.boolean :spouse
      t.boolean :kids
      t.string :kids_0to5
      t.string :kids_6to12
      t.string :kids_13to18
      t.boolean :home_owner
      t.string :home_equity
      t.boolean :morethan1home
      t.boolean :business_owner
      t.string :income
      t.string :spouses_income
      t.boolean :four_o_onek
      t.string :four_o_onek_amount
      t.boolean :stocks_and_bonds
      t.string :stocks_and_bonds_amount
      t.boolean :pension

      t.timestamps
    end
  end
end
