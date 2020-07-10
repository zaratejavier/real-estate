class Address < ApplicationRecord
  belongs_to :property

  def seld.distinct_city
    select("DISTINCT city")
  end
end
