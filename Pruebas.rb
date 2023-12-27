env = Rack::MockRequest.env_for('http://localhost:3000/books')

TraceLocation.trace do
  status, headers, body = Rails.application.call(env)
end
