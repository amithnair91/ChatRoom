create table user_credentials(username varchar(50),password varchar(50));
INSERT INTO public.user_credentials(username, password)VALUES ('user', 'pass');


#
SELECT CASE WHEN EXISTS (
    SELECT *
    FROM [User]
    WHERE UserID = 20070022
)
THEN CAST(1 AS BIT)
ELSE CAST(0 AS BIT) END