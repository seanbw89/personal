update list
set compcase = $1
where user_id = $2 and list_id = $3
returning *