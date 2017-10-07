require 'test_helper'

class BeautiesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get beauties_index_url
    assert_response :success
  end

end
