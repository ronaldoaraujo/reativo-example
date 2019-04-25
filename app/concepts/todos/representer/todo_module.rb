module Todos::Representer
  module TodoModule
    include Reform::Form::Module

    property :id
    property :title
    property :completed
  end
end
