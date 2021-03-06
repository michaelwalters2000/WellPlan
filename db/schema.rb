# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_01_04_093735) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "advisors", force: :cascade do |t|
    t.integer "level"
    t.integer "score"
    t.string "experienceYears"
    t.string "clientNumber"
    t.string "avgClientInvestableAssets"
    t.string "avgClientIncomePercentUnder200"
    t.string "avgClientIncomePercent200to500"
    t.string "avgClientIncomePercent500to1000"
    t.string "avgClientIncomePercentOver1000"
    t.string "totalClientsInvestableAssets"
    t.boolean "mutualFundsETFs"
    t.boolean "individualSecurities"
    t.boolean "stocksAndBonds"
    t.string "totalStocksAndBonds"
    t.string "clientBusinessOwners"
    t.boolean "discipinaryAction"
    t.text "explanation"
    t.boolean "moreThan10PercentAnnuitiesOrEmployerPensions"
    t.integer "clientCapacity"
    t.integer "clientRating"
    t.string "certifications"
    t.boolean "independent"
    t.string "firm"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_advisors_on_user_id"
  end

  create_table "clients", force: :cascade do |t|
    t.integer "level"
    t.integer "score"
    t.integer "age"
    t.boolean "spouse"
    t.boolean "kids"
    t.string "kidsNumber"
    t.boolean "homeowner"
    t.string "equity"
    t.boolean "morethan1home"
    t.boolean "businessowner"
    t.string "income"
    t.string "spousesincome"
    t.boolean "retirement"
    t.string "retirementamount"
    t.boolean "stocksbonds"
    t.string "stocksbondsamount"
    t.boolean "pension"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_clients_on_user_id"
  end

  create_table "matches", force: :cascade do |t|
    t.bigint "advisor_id"
    t.bigint "client_id"
    t.integer "a_user_id"
    t.integer "c_user_id"
    t.string "advisor_name"
    t.string "client_name"
    t.index ["advisor_id"], name: "index_matches_on_advisor_id"
    t.index ["client_id"], name: "index_matches_on_client_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "first_name", default: "", null: false
    t.string "last_name", default: "", null: false
    t.string "phone", default: "", null: false
    t.string "role", default: "user", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
