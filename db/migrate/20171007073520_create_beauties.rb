class CreateBeauties < ActiveRecord::Migration[5.1]
  def change
    create_table :beauties do |t|
      t.string :name
      t.string :hobby
      t.string :character

      t.timestamps
    end
  end
end
