module Todos::Representer
  module Update
    include Representable::JSON
    include TodoModule
  end
end
