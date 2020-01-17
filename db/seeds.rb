# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.new
user.first_name = "marcus"
user.last_name = "smart"
user.phone = "9008886767"
user.email = 'marcus@example.com'
user.role = "Advisor"
user.password = '000000'
user.validate!
user.save!

user2 = User.new
user2.first_name = "kemba"
user2.last_name = "walker"
user2.phone = "8994553232"
user2.email = 'kemba@example.com'
user2.role = "Advisor"
user2.password = '000000'
user2.validate!
user2.save!

user3 = User.new
user3.first_name = "jaylen"
user3.last_name = "brown"
user3.phone = "5554543377"
user3.email = 'jaylen@example.com'
user3.role = "Advisor"
user3.password = '000000'
user3.validate!
user3.save!

user4 = User.new
user4.first_name = "jorge"
user4.last_name = "masvidal"
user4.phone = "9007874444"
user4.email = 'jorge@example.com'
user4.role = "Client"
user4.password = '000000'
user4.validate!
user4.save!

user5 = User.new
user5.first_name = "connor"
user5.last_name = "mcgregor"
user5.phone = "7773332222"
user5.email = 'connor@example.com'
user5.role = "Client"
user5.password = '000000'
user5.validate!
user5.save!

user6 = User.new
user6.first_name = "lamar"
user6.last_name = "jackson"
user6.phone = "6674548989"
user6.email = 'lamar@example.com'
user6.role = "Client"
user6.password = '000000'
user6.validate!
user6.save!

user7 = User.new
user7.first_name = "tom"
user7.last_name = "brady"
user7.phone = "7873435656"
user7.email = 'tom@example.com'
user7.role = "Client"
user7.password = '000000'
user7.validate!
user7.save!

user8 = User.new
user8.first_name = "richard"
user8.last_name = "sherman"
user8.phone = "8004443131"
user8.email = 'richard@example.com'
user8.role = "Client"
user8.password = '000000'
user8.validate!
user8.save!

user9 = User.new
user9.first_name = "russel"
user9.last_name = "wilson"
user9.phone = "8786564422"
user9.email = 'russel@example.com'
user9.role = "Client"
user9.password = '000000'
user9.validate!
user9.save!

user10 = User.new
user10.first_name = "saquon"
user10.last_name = "barkley"
user10.phone = "5553332323"
user10.email = 'saquon@example.com'
user10.role = "Client"
user10.password = '000000'
user10.validate!
user10.save!

user11 = User.new
user11.first_name = "Jon"
user11.last_name = "Jones"
user11.phone = "9995554646"
user11.email = 'jon@example.com'
user11.role = "Client"
user11.password = '000000'
user11.validate!
user11.save!

user12 = User.new
user12.first_name = "Nate"
user12.last_name = "Diaz"
user12.phone = "6768883434"
user12.email = 'nate@example.com'
user12.role = "Client"
user12.password = '000000'
user12.validate!
user12.save!

Client.create({ level: 1, score: 10, user_id: 4})
Client.create({ level: 1, score: 15, user_id: 5})
Client.create({ level: 1, score: 18, user_id: 6})
Client.create({ level: 2, score: 28, user_id: 7})
Client.create({ level: 2, score: 30, user_id: 8})
Client.create({ level: 2, score: 33, user_id: 9})
Client.create({ level: 3, score: 10, user_id: 10})
Client.create({ level: 3, score: 10, user_id: 11})
Client.create({ level: 3, score: 10, user_id: 12})

Advisor.create({level:1, score:10, user_id: 1})
Advisor.create({level:2, score:30, user_id: 2})
Advisor.create({level:3, score:55, user_id: 3})
