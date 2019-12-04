class CreateAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :accounts do |t|
      t.belongs_to :client
      t.belongs_to :advisor

      t.timestamps
    end
  end
end
