class Api::ItemsController < ApplicationController
    before_action :set_department

  def index
    render json: @department.items
  end

  def create
    item = @department.items.new(item_params)
    if item.save
      render json: item
    else
      render json: review.errors
    end
  end


  private
  def set_department
      @department = Department.find(params[:department_id])
  end

  def item_params
    params.require(:item).permit(:name, :description, :price)
  end
end
