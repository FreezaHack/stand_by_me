class BeautiesController < ApplicationController
  def index
    @beauties = Beauty.all
  end

  def show
    Favor.where(user_id: current_user.id).where(beauty_id: params[:id]).first_or_create do |fav|
      fav.point = 10
    end
    @beauties = Beauty.find(params[:id])
    @time = WakeUp.find_by(user_id: current_user.id)
  end

  def time
    @wakeup = WakeUp.new
    @times = WakeUp.find_by(user_id: current_user.id)
  end

  def time_set
    WakeUp.create(user_id: params[:user_id], wake_up_time: params[:wake_up][:wake_up_time], achievement: params[:achievement])
    redirect_to wake_up_set_url

  end

  def morning
    times = WakeUp.find_by(user_id: current_user.id).wake_up_time
    beforeTime = Time.now - 600
    afterTime = Time.now + 600
    WakeUp.where(user_id: current_user.id).destroy_all
    if times > beforeTime && times <= afterTime
      redirect_to morning_good_path(id: params[:id])
    else
      redirect_to morning_bad_path(id: params[:id])
    end
  end

  def good
    @fav = Favor.where(user_id: current_user.id).where(beauty_id: params[:id]).first
    @fav.point = @fav.point + 1
    @fav.save
    @point = @fav.point * 100 / 15
    @point = 100 if @point > 15

  end

  def bad
    @fav = Favor.where(user_id: current_user.id).where(beauty_id: params[:id]).first
    @fav.point = @fav.point - 1
    @fav.save
    @point = @fav.point * 100 / 15
    @point = 0 if @point < 1

  end

  def camera

  end


end
