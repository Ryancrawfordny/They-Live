class AddUserIdToSightings < ActiveRecord::Migration[5.2]
  def change
    add_column :sightings, :user_id, :integer
    add_index :sightings, :user_id
  end
end
