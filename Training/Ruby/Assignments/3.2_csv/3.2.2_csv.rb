# demonstrates reading from a csv file

# declare variables
canvas_url = 'https://fuller.instructure.com' # put full canvas test url eg: https://school.test.instructure.com
canvas_token = '9261~T4YNDJcqMHWdua96CeGwOQMvRTSlYOOKpTR4YzXIkv7obIWsTetAxRmsypULg5aN' # put canvas API token here

# import the csv gem
require 'csv'

#identify location of script
csv_file = '' # use full file path to sample_course_provisioning.csv

CSV.foreach(csv_file, headers: true) do |row|
    course_canvas_id = row[0]                   # You can reference the column by number but this is lazy way if your csv has headers
    course_name = row['long_name']
    puts "#{course_name}'s Canvas URL is https://fuller.instructure.com/courses/#{course_canvas_id}"
end
