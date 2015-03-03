json.array!(@quotes) do |quote|
  json.extract! quote, :id, :quote, :quote_master
  json.url quote_url(quote, format: :json)
end
