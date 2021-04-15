class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  def index
    @users = User.all

    render json: @users
  end

  def show
    @user = User.find(params[:id])

    render json: @user
  end

  def create
    @user = User.create(user_params)

    # if @user.save
    render json: @user, status: :created #location: @user
    # else
    #   render json: @user.errors, status: :unprocessable_entity
    # end
  end

  def login
    @user = User.find_by(username: params[:user][:username])

    if @user && @user.authenticate(params[:user][:password])
      @token = JWT.encode({user_id: @user.id}, Rails.application.secrets.secret_key_base[0])

      render json: {user: @user, token: @token}
    else
      render json: {error: "Invalid Credentials"}, status: :unauthorized
    end
  end

  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @user = User.find(params[:id])
    
    @user.destroy
  end

  private

    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:username, :email, :f_name, :l_name, :password, :image)
    end
end
