class RenameBeatutyIdColumnBeauties < ActiveRecord::Migration[5.1]
  def change
    rename_column :favors, :beatuty_id, :beauty_id
  end
end
