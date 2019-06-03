class CreateSightings < ActiveRecord::Migration[5.2]
  def change
    create_table :sightings do |t|
      t.interger :report
      t.string :info
      t.interger :lat
      t.interger :long

      t.timestamps
    end
  end
end
