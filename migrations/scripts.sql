create table user_credentials(username varchar(50) UNIQUE,password varchar(50));
INSERT INTO public.user_credentials(username, password)VALUES ('user', 'pass');

create table permstaff(username varchar(50),penId varchar(50))
create table gueststaff(username varchar(50),guestId varchar(50))
create table student(username varchar(50),registerId varchar(50))


-- INSERT INTO permstaff(username, penId)VALUES ('user', 'pass');
-- INSERT INTO gueststaff(username, guestId)VALUES ('user', 'pass');
-- INSERT INTO student(username, registerId)VALUES ('user', 'pass');



