class SightingsController < ApplicationController
    def index
      @sightings = Sighting.all
      render json: @sightings, status: :ok
    end
  
     def show
       begin
         @sighting = Sighting.find(params[:id])
         render json: @Sighting, status: :ok
       rescue ActiveRecord::RecordNotFound
         render json: { message: "no sighting matches that ID" }, status: :not_found
       rescue Exception
         render json: { message: "there was some other error" }, status: :internal_server_error
       end
     end
      
       def create
         sighting = Sighting.find params[:sighting_id]
         sighting.sightings << Sighting.new(sighting_params)
         render json: { sighting: sighting.sightings.last }
       end
    
       def update
         sighting = Sighting.where(sighting_id: params[:sighting_id], id: params[:id])
         sighting.update sighting_params
         render json: { sighting: sighting }
       end
    
        def destroy
         sighting = Sighting.where(sighting_id: params[:sighting_id], id: params[:id])
         sighting.destroy(params[:id])
       end
  
  end