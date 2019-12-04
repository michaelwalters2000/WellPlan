class Client < ApplicationRecord
  has_many :advisors, through: :account
end
