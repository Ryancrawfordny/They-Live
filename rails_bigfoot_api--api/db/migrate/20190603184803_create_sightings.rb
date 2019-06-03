class CreateSightings < ActiveRecord::Migration[5.2]
  def change
    create_table :sightings do |t|
      t.integer :report
      t.string :info
      t.integer :lat
      t.integer :long

      t.timestamps
    end
  end
end
