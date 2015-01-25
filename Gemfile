source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.0'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0.0.beta1'
# Compass adds mixins to Sass
gem 'compass-rails', '~> 2.0.0'
# Suzy is a set of mixins used for creating grid layouts
gem 'susy'
# Normalize.css is a browser reset
gem 'normalize-rails'
# Breakpoint provides mixins for media queries
gem 'breakpoint', '~> 2.5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.1.0'
# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# An image compression preprocessor
gem 'sprockets-image_compressor'

# An update to the mail gem that decreases ram footprint by 36%, rec'd by Heroku
gem 'mail'

# Use Puma as the app server
gem 'puma'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger
  # console
  gem 'byebug'
  # Use sqlite3 as the database for Active Record
  gem 'sqlite3'
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'
  # Linter for Sass and Scss
  gem 'scss-lint'
  # Linter for rails ruby
  gem 'rubocop'
  # Spring speeds up development by keeping your application running in the back
  # ground. Read more: https://github.com/rails/spring
  gem 'spring'
end

group :production do
  # For heroku
  gem 'pg'
  gem 'rails_12factor'
end
