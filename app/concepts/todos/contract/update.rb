module Todos::Contract
  class Update < Reform::Form
    include Todos::Representer::TodoModule

    # validates :name, presence: true, length: {minimum: 1}
  end
end
