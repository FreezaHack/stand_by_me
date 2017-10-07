require 'test_helper'

class BeautyControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get beauty_index_url
    assert_response :success
  end

end
