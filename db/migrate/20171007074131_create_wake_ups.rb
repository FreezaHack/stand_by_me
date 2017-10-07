class CreateWakeUps < ActiveRecord::Migration[5.1]
  def change
    create_table :wake_ups do |t|
      t.integer :user_id
      t.datetime :wake_up_time
      t.boolean :achievement

      t.timestamps
    end
  end
end
