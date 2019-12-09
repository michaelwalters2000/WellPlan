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

ActiveRecord::Schema.define(version: 2019_12_03_000837) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accounts", force: :cascade do |t|
    t.bigint "client_id"
    t.bigint "advisor_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["advisor_id"], name: "index_accounts_on_advisor_id"
    t.index ["client_id"], name: "index_accounts_on_client_id"
  end

  create_table "advisors", force: :cascade do |t|
    t.integer "experience_years"
    t.integer "client_number"
    t.integer "avg_client_investable_assets"
    t.integer "total_client_income"
    t.integer "total_clients_investable_assets"
    t.integer "mutual_funds_ETFs"
    t.boolean "individual_securities"
    t.integer "total_stock_and_bonds"
    t.decimal "client_business_owners"
    t.boolean "discipinary_action"
    t.text "explination"
    t.integer "client_capacity"
    t.integer "client_rating"
    t.boolean "CFP"
    t.boolean "AIF"
    t.boolean "PFS"
    t.boolean "CHFC"
    t.boolean "NAPFA"
    t.boolean "FPA"
    t.boolean "independent"
    t.string "firm"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "clients", force: :cascade do |t|
    t.integer "age"
    t.boolean "spouse"
    t.boolean "kids"
    t.string "kids_0to5"
    t.string "kids_6to12"
    t.string "kids_13to18"
    t.boolean "home_owner"
    t.string "home_equity"
    t.boolean "morethan1home"
    t.boolean "business_owner"
    t.string "income"
    t.string "spouses_income"
    t.boolean "four_o_onek"
    t.string "four_o_onek_amount"
    t.boolean "stocks_and_bonds"
    t.string "stocks_and_bonds_amount"
    t.boolean "pension"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "first_name", default: "", null: false
    t.string "last_name", default: "", null: false
    t.string "phone", default: "", null: false
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
