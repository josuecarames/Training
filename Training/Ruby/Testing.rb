# import gems
require 'typhoeus'
require 'json'
require 'csv'

# declare variables
canvas_url = 'https://fuller.test.instructure.com' # put full canvas test url eg: https://school.test.instructure.com
canvas_token = '9261~bhBjdSV7pAwvrxtCRWmsciEFPX43LU8ZNww2ErIzZWMBce0DRjiDsarKCe68QZpT' # put canvas API token here

course_name = "Introduction to Philosophy"
course_code = "PHIL101"
sis_course_id = "PHIL101"
hide_grades = "false"
enroll_me = "true"

###############################
default_view = 'syllabus' # Should be the home page value you want to pass
###############################

# define the API call
create_course = Typhoeus::Request.new(
    "#{canvas_url}/api/v1/accounts/self/courses",
    method: :post,
    headers: { authorization: "Bearer #{canvas_token}" },
    params: {
        "course[name]" => course_name,              #replaced hard coded values
        "course[course_code]" => course_code,
        "course[sis_course_id]" => sis_course_id,
        "course[hide_final_grades]" => hide_grades, # when adding parameters all but the last should have a comma after it 
        "enroll_me" => enroll_me,
        "course[default_view]" => default_view
    }
    )

create_course.on_complete do |response|
    if response.code == 200
        data = JSON.parse(response.body)
        puts "The course_id is #{data['id']}"
        puts "The course_code is #{data['course_code']}"
        puts "The sis_course_id is #{data['sis_course_id']}"
        puts "The default_view is the #{data['default_view']}"
    else
        puts "Something went wrong! Response code was #{response.code}"
    end
end

create_course.run