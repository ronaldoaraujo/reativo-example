module Todos::Operation
  class Update < Trailblazer::Operation
    class Present < Trailblazer::Operation
      step ->(options, params) { options["representer.render.class"] = Todos::Representer::Update }
      step ->(options, params) { options["representer.errors.class"] = Reativo::Representer::Errors }
      step Model(Todo, :find)
      step Contract::Build( constant: Todos::Contract::Update )
    end

    step Nested( Present )
    step Contract::Build(constant: Todos::Contract::Update)
    step Contract::Validate(key: 'todo')
    step Contract::Persist()
  end
end
