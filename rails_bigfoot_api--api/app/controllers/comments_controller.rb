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
    def create
        comment = Comment.find params[:comment_id]
        Comment.comments << Comment.new(comment_params)
        render json: { comment: comment.comments.last }
      end
   
      def update
        comment = Comment.where(comment_id: params[:comment_id], id: params[:id])
        comment.update post_params
        render json: { comment: comment }
      end
   
       def destroy
        comment = Comment.where(comment_id: params[:comment_id], id: params[:id])
        comment.destroy(params[:id])
      end
end