class CreateClients < ActiveRecord::Migration[5.2]
  def change
    create_table :clients do |t|
      t.integer :age
      t.boolean :spouse
      t.boolean :kids
      t.integer :kids_0to5
      t.integer :kids_6to12
      t.integer :kids_13to18
      t.boolean :home_owner
      t.integer :home_equity
      t.integer :number_of_homes
      t.boolean :business_owner
      t.integer :income
      t.integer :four_o_one_k
      t.integer :stocks_and_bonds
      t.boolean :pension
      t.timestamps
    end
  end
end
