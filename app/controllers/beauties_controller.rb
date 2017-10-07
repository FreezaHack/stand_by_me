class BeautiesController < ApplicationController
  def index
    @beauties = Beauty.all
  end
end
