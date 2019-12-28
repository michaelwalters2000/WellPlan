class Match < ApplicationRecord
  has_one :client
  has_one :advisor
end
