# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Client.create({ age: 35, spouse: true, kids: true })

User.new({first_name: "Marcus", last_name: "Smart", email: "marcus@gmail.com", phone: "6784564344"})
User.create({first_name: "Kemba", last_name: "Walker", email: "kemba@gmail.com", phone: "6007895432"})
User.create({first_name: "Jaylen", last_name: "Brown", email: "jaylen@gmail.com", phone: "8889784554"})
User.create({first_name: "Jorge", last_name: "Masvidal", email: "jorge@gmail.com", phone: "0102345678"})
User.create({first_name: "Connor", last_name: "Mcgregor", email: "connor@gmail.com", phone: "8007893456"})
User.create({first_name: "Lamar", last_name: "Jackson", email: "lamar@gmail.com", phone: "4006789999"})
User.create({first_name: "Tom", last_name: "Brady", email: "tom@gmail.com", phone: "70056789454"})
User.create({first_name: "Russel", last_name: "Wilson", email: "russel@gmail.com", phone: "9133453456"})
User.create({first_name: "Richard", last_name: "Sherman", email: "sherman@gmail.com", phone: "5554321234"})
User.create({first_name: "Christiano", last_name: "Ronaldo", email: "Christiano@gmail.com", phone: "7897894567"})
User.create({first_name: "Nate", last_name: "Diaz", email: "diaz@gmail.com", phone: "5674563214"})
User.create({first_name: "Saquon", last_name: "Barkley", email: "saquon@gmail.com", phone: "78965432345"})
User.create({first_name: "Julian", last_name: "Edelman", email: "julian@gmail.com", phone: "3456789000"})
User.create({first_name: "Dion", last_name: "Sanders", email: "dion@gmailcom", phone: "6785553433"})
User.create({first_name: "Jason", last_name: "Tatum", email: "jtatum@gmail.com", phone: "50834542332"})

Advisor.create({level:1, score:10, user_id: 3})
Advisor.create({level:1, score:15, user_id: 4})
Advisor.create({level:1, score:18, user_id: 5})
Advisor.create({level:2, score:30, user_id: 6})
Advisor.create({level:2, score:35, user_id: 7})
Advisor.create({level:2, score:40, user_id: 8})
Advisor.create({level:3, score:45, user_id: 9})
Advisor.create({level:3, score:50, user_id: 10})
Advisor.create({level:3, score:55, user_id: 11})
