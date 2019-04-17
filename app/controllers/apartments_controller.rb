class ApartmentsController < ApplicationController
  before_action :set_apartment, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, except: :index

    def index
      apartment = Apartment.all
      respond_to do |format|
        format.json { render json: apartment }
      end
    end

	  def create
	    apartment = current_user.apartments.new(apartment_params)

	    respond_to do |format|
	      if apartment.save
	        format.html { redirect_to apartment, notice: 'Apartment was successfully created.' }
	        format.json { render :show, status: :created, location: apartment }
	      else
	        format.html { render :new }
	        format.json { render json: apartment.errors, status: :unprocessable_entity }
	      end
	    end
	  end

    private

    def apartment_params
      params.require(:apartment).permit(:name, :street_address, :city, :postal_code, :state, :country, :building_manager_name, :building_manager_phone_number, :building_manager_hours)
    end

end
