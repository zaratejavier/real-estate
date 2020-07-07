require 'test_helper'

class Api::PropertiesControllerTest < ActionDispatch::IntegrationTest
  test "should get skip-routes" do
    get api_properties_skip-routes_url
    assert_response :success
  end

end
