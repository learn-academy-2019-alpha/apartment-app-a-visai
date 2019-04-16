class CreateApartments < ActiveRecord::Migration[5.2]
  def change
    create_table :apartments do |t|
      t.string :name
      t.string :street_address
      t.string :city
      t.integer :postal_code
      t.string :state
      t.string :country
      t.string :building_manager_name
      t.string :building_manager_phone_number
      t.string :building_manager_hours
      t.integer :user_id

      t.timestamps
    end
  end
end
