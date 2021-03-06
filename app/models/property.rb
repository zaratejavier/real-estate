class Property < ApplicationRecord
  belongs_to :agent
  has_one :address

  #   SELECT properties.id as property_id, price, beds, baths, sold, sq_ft, ad.city, ad.zip, ad.street, a.first_name, a.last_name,a.email
  # FROM properties
  # INNER JOIN addresses ad ON ad.property_id = properties.id
  # INNER JOIN agents a ON a.id = properties.agent_id
  # WHERE properties.sold != TRUE
  # ORDER BY a.id
  def self.available
    select("properties.id, price, beds, baths, sold, sq_ft, ad.city, ad.zip, ad.street, a.first_name, a.last_name,a.email")
      .joins("INNER JOIN addresses ad ON ad.property_id = properties.id
            INNER JOIN agents a ON a.id = properties.agent_id")
      .where("properties.sold <> TRUE")
      .order("a.id")
  end

  # SELECT price, beds,baths, sq_ft, street
  # FROM properties
  # INNER JOIN addresses a ON a.property_id = properties.id
  # WHERE (a.city) = 'Draper' AND properties.sold <> true 

  def self.by_city(city)
    select("price, beds, baths, sq_ft, street")
      .joins("INNER JOIN addresses a ON a.property_id = properties.id")
      .where("LOWER(a.city) = ? AND properties.sold <> true", city.downcase)
  end

  



  def self.Distinct_city
    select("DISTINCT city")
    from("addresses")
  end



#   select DISTINCT city, STRING_AGG(CAST(price AS varchar), ',' ORDER by price DESC ) AS prices, COUNT(*) price
# from addresses
# INNER JOIN properties p ON addresses.property_id = p.id
# WHERE (p.sold IS true)
# GROUP BY city

def self.city_cost
  select("DISTINCT city, STRING_AGG(CAST(price AS varchar), ',' ORDER BY price DESC ) AS prices, COUNT(*) price")
  .from('addresses')
  .joins("INNER JOIN properties p ON addresses.property_id = p.id")
  .where("p.sold IS true")
  .group("city")
end

end