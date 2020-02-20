use canvas;
select name, final_score from course_score_fact
inner join account_dim on account_id = account_dim.account_id
where final_score is not null;