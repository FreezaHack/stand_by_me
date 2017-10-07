class CreateFavors < ActiveRecord::Migration[5.1]
  def change
    create_table :favors do |t|
      t.integer :user_id
      t.integer :point
      t.integer :beatuty_id
      t.timestamps
    end
  end
end
