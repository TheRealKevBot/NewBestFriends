class RenameTypeToAnimalType < ActiveRecord::Migration[6.0]
  def change
    rename_column :animals, :type, :animal_type
  end
end
