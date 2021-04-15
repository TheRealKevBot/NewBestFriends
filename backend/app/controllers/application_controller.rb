class ApplicationController < ActionController::API

    def authorized
        render json: {error: "Please Log In"} unless logged_in
    end

    def logged_in
        !!current_user
    end

    def current_user
        auth_header = request.headers["Authorization"]
    end

end
