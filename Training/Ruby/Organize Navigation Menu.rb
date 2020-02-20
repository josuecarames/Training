# import gems
require 'typhoeus'
require 'json'
require 'csv'

canvas_url = 'https://fuller.test.instructure.com' # put full canvas test url 
canvas_token = '9261~bhBjdSV7pAwvrxtCRWmsciEFPX43LU8ZNww2ErIzZWMBce0DRjiDsarKCe68QZpT' # put canvas API token here
csv_file = '/Users/josuecarames/Documents/Code/Ruby/Assignments/3.5_more_typhoeus/api_courses.csv' # full path to api_courses.csv
success_count = 0
fail_count = 0

# this is a nested or multidimensional array; ['id','position','hidden']

tab_ids = [                                       
    ['announcements','2','false'], 
    ['syllabus','3','false'],
    ['grades', '4', 'false'],
    ['people', '5', 'false'],
    ['settings', '6', 'false'],
    ['assignments','7','true'], 
    ['pages', '8', 'true'],
    ['files', '9', 'true'],
    ['outcomes', '10', 'true'], 
    ['quizzes', '11', 'true'], 
    ['modules','12','true'],    
    ['discussions','13','true'], 
    ['collaborations','14','true'], 
    ['assignments', '15', 'true']
    ['conferences','16','true'],
    ]

CSV.foreach(csv_file, headers: true) do |row|
 sis_course_id = row['course_id']

 tab_ids.each do |tab_info| # loop through each tab_id
 update_course = Typhoeus::Request.new(
 "#{canvas_url}/api/v1/courses/sis_course_id:#{sis_course_id}/tabs/#{tab_info[0]}",
 method: :put,
 headers: { authorization: "Bearer #{canvas_token}" },
 params: {
 "position" => tab_info[1],
 "hidden" => tab_info[2]
 }
 )

 update_course.on_complete do |response|
 if response.code == 200
 data = JSON.parse(response.body)
 puts "The course tab #{tab_info[0]} has been updated in course #{sis_course_id}"
 else
 puts "Something went wrong updating the course tab #{tab_id} in course #{sis_course_id}! Response code was #{response.code}"
 end
 end
 update_course.run
 end
end