class CreateBuyers < ActiveRecord::Migration[6.0]
  def change
    create_table :buyers do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.float :max_price
      t.text :cities
      t.belong_to :agent

      t.timestamps
    end
  end
end
