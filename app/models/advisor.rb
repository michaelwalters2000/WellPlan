class Advisor < ApplicationRecord
  has_many :clients, through: :account
end
