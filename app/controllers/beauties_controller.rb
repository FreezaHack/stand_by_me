class BeautiesController < ApplicationController
  def index
    @beauties = Beauty.all
  end

  def show
    @beauties = Beauty.find(params[:id])
    @time = WakeUp.find_by(user_id: current_user.id)
    gon.wakeup = @time.wake_up_time
  end

  def time
    @wakeup = WakeUp.new
    @times = WakeUp.find_by(user_id: current_user.id)
  end

  def time_set
    WakeUp.create(user_id: params[:user_id], wake_up_time: params[:wake_up][:wake_up_time], achievement: params[:achievement])
    redirect_to wake_up_set_url

  end


end
