class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  has_one :advisor or has_one :client

  accepts_nested_attributes_for :advisor

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
