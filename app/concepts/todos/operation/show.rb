module Todos::Operation
  class Show < Trailblazer::Operation
    step ->(options, params) { options["representer.render.class"] = Todos::Representer::Create }
    step Model( Todo, :find )
    step :cache_key!

    def cache_key!(opts, params:, current_user:, **)
      opts[:cache_key] = opts[:model].cache_key_with_version
    end
  end
end
