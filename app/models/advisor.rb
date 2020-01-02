class Advisor < ApplicationRecord
  has_many :clients, through: :account
  belongs_to :user
end
