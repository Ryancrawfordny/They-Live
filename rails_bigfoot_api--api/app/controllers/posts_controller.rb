class PostsController < ApplicationController
    def index
      @posts = Post.all
      render json: @posts, status: :ok
    end
  
     def show
       begin
         @post = Post.find(params[:id])
         render json: @Post, status: :ok
       rescue ActiveRecord::RecordNotFound
         render json: { message: "no post matches that ID" }, status: :not_found
       rescue Exception
         render json: { message: "there was some other error" }, status: :internal_server_error
       end

       def create
        post = Post.find params[:post_id]
        Post.posts << Post.new(post_params)
        render json: { post: post.posts.last }
      end
   
      def update
        post = Post.where(post_id: params[:post_id], id: params[:id])
        post.update post_params
        render json: { post: post }
      end
   
       def destroy
        post = Post.where(post_id: params[:post_id], id: params[:id])
        post.destroy(params[:id])
      end
     end