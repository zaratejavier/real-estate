class Address < ApplicationRecord
  belongs_to :property

  def self.distinct_city
    select("DISTINCT city")
  end
end
