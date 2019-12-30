class CreateClients < ActiveRecord::Migration[5.2]
  def change
    create_table :clients do |t|
      t.integer :age
      t.boolean :spouse
      t.boolean :kids
      t.string :kids0to5
      t.string :kids6to12
      t.string :kids13to18
      t.boolean :homeowner
      t.string :equity
      t.boolean :morethan1home
      t.boolean :businessowner
      t.string :income
      t.string :spousesincome
      t.boolean :retirement
      t.string :retirementamount
      t.boolean :stocksbonds
      t.string :stocksbondsamount
      t.boolean :pension
      t.integer :level

      t.timestamps
    end
  end
end
