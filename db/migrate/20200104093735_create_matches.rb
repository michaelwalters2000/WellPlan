class CreateMatches < ActiveRecord::Migration[5.2]
  def change
    create_table :matches do |t|
            t.belongs_to :advisor
            t.belongs_to :client
            t.integer :a_user_id
            t.integer :c_user_id
            t.string :advisor_name
            t.string :client_name
          end
        end
      end
