class CommentsController < ApplicationController
    def index
      @comments = Comment.all
      render json: @comments, status: :ok
    end
  
     def show
       begin
         @comment = Comments.find(params[:id])
         render json: @Comment, status: :ok
       rescue ActiveRecord::RecordNotFound
         render json: { message: "no comment matches that ID" }, status: :not_found
       rescue Exception
         render json: { message: "there was some other error" }, status: :internal_server_error
       end
    end
end