class PostsController < ApplicationController
    def index
      @posts = Post.all
      @fullPosts = @posts.map { | post | {
        post: post,
        comments: Comment.where(:post_id => post.id)
      }}

      render json: @fullPosts, status: :ok
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
    end

       def create
       @post = Post.new(post_params)

        if @post.save
        render json: {post: @post}, status: :ok
        else
          render json: { message: " in creating error" }, status: :internal_server_error
        end
      end

      def new
        @post = Post.new
      end
   
      def update
        @post = Post.find(params[:id])
        @post.update post_params
        render json: { post: @post }
      end
   
       def destroy
        @post = Post.find(params[:id])
        @post.destroy()
        render json: { message: "done" }, status: :ok

        # @post.destroy(params[:id])
      end

      private

      def post_params
        params.permit(:post, :user_id)
      end
     end