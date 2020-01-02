class Client < ApplicationRecord
  has_many :advisors, through: :account
  belongs_to :user
end
