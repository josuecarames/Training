USE canvas;
SELECT name, final_score FROM course_score_fact
INNER JOIN account_dim ON account_id = account_dim.agiccount_id
WHERE final_score is NOT NULL;