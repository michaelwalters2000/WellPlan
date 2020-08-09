# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.new
user.first_name = "Bill"
user.last_name = "Belicheck"
user.phone = "9007894000"
user.email = 'bill@pats.com'
user.role = "Advisor"
user.password = '000000'
user.validate!
user.save!



Advisor.create({level:3, score:55, user_id: 1})
Advisor.create({level:2, score:35, user_id: 1})
Advisor.create({level:1, score:15, user_id: 1})
