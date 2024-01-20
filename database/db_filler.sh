DB_NAME=ti_hw_db
su postgres <<EOF
psql -U postgres  -d $DB_NAME -c "INSERT INTO emploee(surname, name, fathername) VALUES('Иванов', 'Иван', 'Иванович')"
psql -U postgres  -d $DB_NAME -c "INSERT INTO emploee(surname, name, fathername) VALUES('Сидоров', 'Сидор', 'Сидорович')"

psql -U postgres  -d $DB_NAME -c "INSERT INTO equipment(name, eq_id) VALUES('Токарный станок F134')"
psql -U postgres  -d $DB_NAME -c "INSERT INTO equipment(name, eq_id) VALUES('Столярный станок AS134')"

echo "Database '$DB_NAME' is above."
EOF