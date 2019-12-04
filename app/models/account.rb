class Account < ApplicationRecord
  has_one :user
  belongs_to :clients
  belongs_to :advisors

end
