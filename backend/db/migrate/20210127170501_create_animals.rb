class CreateAnimals < ActiveRecord::Migration[6.0]
  def change
    create_table :animals do |t|
      t.string :name
      t.string :image
      t.string :type
      t.integer :age
      t.string :breed
      t.text :description
      t.text :breed_info

      t.timestamps
    end
  end
end
