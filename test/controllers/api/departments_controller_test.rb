require 'test_helper'

class Api::DepartmentsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_departments_index_url
    assert_response :success
  end

  test "should get create" do
    get api_departments_create_url
    assert_response :success
  end

  test "should get update" do
    get api_departments_update_url
    assert_response :success
  end

  test "should get delete" do
    get api_departments_delete_url
    assert_response :success
  end

  test "should get show" do
    get api_departments_show_url
    assert_response :success
  end

end
