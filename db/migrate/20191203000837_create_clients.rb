class CreateClients < ActiveRecord::Migration[5.2]
  def change
    create_table :clients do |t|
      t.integer :level
      t.integer :score
      t.integer :age
      t.boolean :spouse
      t.boolean :kids
      t.string :kidsNumber
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
      t.bigint :user_id
      t.belongs_to :user

      t.timestamps
    end
  end
end
